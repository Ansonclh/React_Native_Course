import { View, Text, Pressable, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Articles({ categories, articles }) {
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
<ArticleCard item={item} index={index} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="title">Latest News</Text>
      <View testID="articlesDisplay">
        <FlatList
          data={articles}
          keyExtractor={(item) => item.idArticle}
          renderItem={renderItem}  //in constant renderItem, we are passing the current article (item), its index, and navigation as props to ArticleCard component, and returning the ArticleCard component to be rendered for each article in the FlatList
          numColumns={2}
      />
      </View>
    </View>
  );
}

const ArticleCard = ({ item, index, navigation }) => {
  return (
    <View
      style={[styles.cardContainer, { paddingLeft: 20, paddingRight: 15}]} testID="articleDisplay"
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("ArticleDetail", { ...item })}  //parsing current article's data (item) as params to ArticleDetail screen
      >
          <Image
            source={{ uri: item.thumbnail }}
            style={[styles.articleImage, { height: index % 3 === 0 ? hp(25) : hp(35) }]}  //if index divisible by 3, set height to 25% of screen height, else set to 35%
          />
          <Text style={styles.articleText}>
            {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}  {/*if title length exceeds 20 characters, slice it to 20 characters and add "..." at the end, else display full title  */}
          </Text>
          <Text style={styles.articleDescription}>
            {item.description.length > 40 ? item.description.slice(0, 40) + "..." : item.description}  {/*if description length exceeds 40 characters, slice it to 40 characters and add "..." at the end, else display full description  */}
          </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4), // mx-4 equivalent
    marginTop: hp(2),
  },
  title: {
    fontSize: hp(3),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginBottom: hp(1.5),
  },
  loading: {
    marginTop: hp(20),
  },
  cardContainer: {
    justifyContent: "center",
    marginBottom: hp(1.5),
    flex: 1, // Allows cards to grow and fill space evenly
  },
  articleImage: {
    width: "100%",
    borderRadius: 35,
    backgroundColor: "rgba(0, 0, 0, 0.05)", // bg-black/5
  },
  articleText: {
    fontSize: hp(1.5),
    fontWeight: "600", // font-semibold
    color: "#52525B", // text-neutral-600
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  articleDescription: {
    fontSize: hp(1.2),
    color: "#6B7280", // gray-500
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  row: {
    justifyContent: "space-between", // Align columns evenly
  },
});
