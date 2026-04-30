import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function MyArticlesScreen() {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // const logout = () => {
  //   auth.signOut();
  // };

  // onPress={() => logout()} is same as onPress={logout}, onPress={() => logout()}, onPress={() => { logout(); }} and onPress={() => auth.signOut()}
  // onPress={() => logout()} call custom function. It is a wrapper function, first trigger arrow function then logout()
  // onPress={logout} receive Native event object as argument and normally logout doesn't use event object (no params). It is pro choice for readability for functions without params. Reference to function.
  // **If it is onPress={logout()}, it will call the function during rendering, which is not the intended behavior. We want to call logout only when the button is pressed, so we should use onPress={logout} or onPress={() => logout()} to ensure it is called at the right time.**
  // onPress={() => auth.signOut()} is an inline function.

  // for onPress={(e) => logout(e)}, it normally use in event object (local variable) that the click event will trigger
  // for onPress={() => logout(e)}, the variable e is a global variable


  //useCallback() is memoized version of function that only changes if its dependencies change. It is used to optimize performance by preventing unnecessary re-creations of functions on every render.
  //So it is a function that can call later. It usually execute in render phase
  //useEffect() is hook to run side-effect code after render. It is usually used for API calls, logging or changing the DOM.
  const fetchArticles = useCallback(async (isManualRefresh = false) => {
    try {
      if (isManualRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const storedArticles = await AsyncStorage.getItem("customArticles");
      setArticles(storedArticles ? JSON.parse(storedArticles) : []);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  //useEffect() runs when the component mounts and whenever the dependencies change. If navigate from screen A to screen B, screen A is still mounted and useEffect() will not run again.
  //useFocusEffect() runs when the screen comes into focus, which means it will run every time you navigate to that screen, even if it's already mounted. So if navigate from screen A to screen B, and then back to screen A, useFocusEffect() will run again because screen A is focused again.

  useFocusEffect(
    useCallback(() => {
      fetchArticles();
    }, [fetchArticles])
  );

  const handleAddArticle = () => {
    navigation.navigate("NewsFormScreen");
  };

  const handleArticleClick = (article) => {
    navigation.navigate("CustomNewsScreen", { article }); // Pass the article object to the detail screen
  };

  const deleteArticle = async (index) => {
    try {
      const updatedArticles = [...articles];
      updatedArticles.splice(index, 1); // Remove article from array
      await AsyncStorage.setItem("customArticles", JSON.stringify(updatedArticles)); // Update AsyncStorage
      await fetchArticles(); // Reload from storage so UI always reflects latest saved data
    } catch (error) {
      console.error("Error deleting the article:", error);
    }
  };

  const handleRefresh = () => {
    fetchArticles(true);
  };

  const editArticle = (article, index) => {
    navigation.navigate("NewsFormScreen", { articleToEdit: article, articleIndex: index });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{"Back"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAddArticle} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Article</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#f59e0b" /> //Loading icon
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {articles.length === 0 ? (
            <Text style={styles.noArticlesText}>No articles added yet.</Text>
          ) : (
            articles.map((article, index) => (
              <View key={index} style={styles.articleCard} testID="articleCard">
                <TouchableOpacity testID="handleArticleBtn" onPress={() => handleArticleClick(article)}>  {/* for () => handleArticleClick(article), the variable article takes the global variable (map function variable) to run the function with the specific article data, but if it is (article) -> handleArticleClick(article), it would refer to the function itself, not the specific article. It defines article as a local variable */}
                   {article.image && (
                    <Image
                      source={{ uri: article.image }}
                      style={styles.articleImage}
                    />
                  )}
                  <Text style={styles.articleTitle}>{article.title}</Text>
                  <Text style={styles.articleDescription} testID="articleDescp">
                    {article.description?.substring(0, 50) + "..."}
                  </Text>
                </TouchableOpacity>

                {/* Edit and Delete Buttons */}
                <View style={styles.actionButtonsContainer} testID="editDeleteButtons">
                  <TouchableOpacity
                    onPress={() => editArticle(article, index)}
                    style={styles.editButton}
                  >
                    <Text style={styles.editButtonText}>Edit</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    onPress={() => deleteArticle(index)}
                    style={styles.deleteButton}
                  >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                 
                </View>
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
    backgroundColor: "#F9FAFB",
  },
  backButton: {
    marginBottom: hp(1.5),
  },
  backButtonText: {
    fontSize: hp(2.2),
    color: "#4F75FF",
  },
  addButton: {
    backgroundColor: "#4F75FF",
    padding: wp(.7),
    alignItems: "center",
    borderRadius: 5,
    width:300,
   marginLeft:500
    // marginBottom: hp(2),
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(2.2),
  },
  scrollContainer: {
    paddingBottom: hp(2),
    height:'auto',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  noArticlesText: {
    textAlign: "center",
    fontSize: hp(2),
    color: "#6B7280",
    marginTop: hp(5),
  },
  articleCard: {
    width: 400, // Make article card width more compact
    height: 300, // Adjust the height of the card to fit content
    backgroundColor: "#fff",
    padding: wp(3),
    borderRadius: 8,
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // for Android shadow
  },
  articleImage: {
    width: 300, // Set width for article image
    height: 150, // Adjust height of the image
    borderRadius: 8,
    marginBottom: hp(1),
  },
  articleTitle: {
    fontSize: hp(2),
    fontWeight: "600",
    color: "#111827",
    marginBottom: hp(0.5),
  },
  articleDescription: {
    fontSize: hp(1.8),
    color: "#6B7280",
    marginBottom: hp(1.5),
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  editButton: {
    backgroundColor: "#34D399",
    padding: wp(.5),
    borderRadius: 5,
    width: 100, // Adjust width of buttons to be more compact
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(1.8),
  },
  deleteButton: {
    backgroundColor: "#EF4444",
    padding: wp(.5),
    borderRadius: 5,
    width: 100, // Adjust width of buttons to be more compact
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(1.8),
  },
});
