import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

export default function CustomNewsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //for props, it used to pass data from parent component to child component (not visible in URL, lost on page refresh), best use for private, complex data
  //for route.params, it is used to pass data between screens in a navigation stack (visible in URL, persists on refresh), best use for resource identifiers
  //to pass data for route.params, we can use navigation.navigate("ScreenName", { key: value }) to pass data when navigating to a screen, and then access it in the target screen using useRoute hook and route.params.key. This is particularly useful for passing simple data like IDs or flags that are needed to fetch or display specific content on the target screen.

  const route = useRoute();
  const { article } = route.params || {}; // Pass the article object as a parameter
  const favoriteArticles = useSelector(
    (state) => state.favorites.favoriteArticles
  );
  const isFavourite = favoriteArticles.includes(article.idArticle); // Adjust this according to your article structure

  if (!article) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Article Details Available</Text>
      </View>
    );
  } else {
    console.log("Article details:", article); // Log the article details to verify the data structure
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(article)); // Adjust the action to handle articles
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent} testID="scrollContent"
    >
      {/* Article Image */}
      <View style={styles.imageContainer} testID="imageContainer">
          <Image source={{ uri: article.image }} style={styles.articleImage} />
      </View>
      <View
        style={styles.topButtonsContainer} testID="topButtonsContainer"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={styles.favoriteButton}
        >
          <Text>{isFavourite ? "♥" : "♡"}</Text>
        </TouchableOpacity>
      </View>

      {/* Article Details */}
      <View style={styles.contentContainer} testID="contentContainer">
        <Text style={styles.articleTitle}>{article.title}</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Content</Text>
          <Text style={styles.contentText}>{article.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  articleImage: {
    width: wp(98),
    height: hp(50),
    borderRadius: 35,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 4,
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },
  articleTitle: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: hp(2),
  },
  sectionContainer: {
    marginBottom: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    fontWeight: "bold",
    color: "#4B5563",
    marginBottom: hp(1),
  },
  topButtonsContainer: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp(4),
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    marginLeft: wp(5),
    backgroundColor: "white",
  },
  favoriteButton: {
    padding: 8,
    borderRadius: 50,
    marginRight: wp(5),
    backgroundColor: "white",
  },
  contentText: {
    fontSize: hp(1.6),
    color: "#4B5563",
  },
});
