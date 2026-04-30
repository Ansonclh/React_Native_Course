import { View,Text,TextInput,TouchableOpacity,Image,StyleSheet,} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";

export default function NewsFormScreen({ route, navigation }) {
  const { articleToEdit, articleIndex, onArticleEdited } = route.params || {};
  const [title, setTitle] = useState(articleToEdit ? articleToEdit.title : "");
  const [image, setImage] = useState(articleToEdit ? articleToEdit.image : "");
  const [description, setDescription] = useState(
    articleToEdit ? articleToEdit.description : ""
  );
  //NewsFormScreen allows user to create / edit an article by filling out a form with title, image URL, and description. It uses useState to manage form state, and AsyncStorage to save articles locally. If articleToEdit is passed via route params, it pre-fills the form for editing. The saveArticle function will handle saving the new or edited article to AsyncStorage and updating the parent component through onArticleEdited callback.
   const saveArticle = async () => {
    const newArticle = { title, image, description };
    try {
      const existingArticles = await AsyncStorage.getItem("customArticles");
      const articles = existingArticles ? JSON.parse(existingArticles) : [];

      // If editing an article, update it; otherwise, add a new one
      if (articleToEdit !== undefined) {  //undefined parmas indicates whether we're editing an existing article or creating a new one. If articleToEdit is not undefined, it means we're editing an existing article, and we should update the article at the specified index in the articles array. If it is undefined, it means we're creating a new article, and we should add it to the end of the articles array.
        articles[articleIndex] = newArticle;
        await AsyncStorage.setItem("customArticles", JSON.stringify(articles));
        if (onArticleEdited) onArticleEdited(); // Notify the edit
      } else {
        articles.push(newArticle); // Add new article
        await AsyncStorage.setItem("customArticles", JSON.stringify(articles));
      }

      navigation.goBack(); // Return to the previous screen
    } catch (error) {
      console.error("Error saving the article:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Text style={styles.imagePlaceholder}>Upload Image URL</Text>
      )}
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
        style={[styles.input, { height: hp(20), textAlignVertical: "top" }]}
      />
      <TouchableOpacity onPress={saveArticle} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Article</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
  },
  input: {
    marginTop: hp(4),
    borderWidth: 1,
    borderColor: "#ddd",
    padding: wp(.5),
    marginVertical: hp(1),
  },
  image: {
    width: 200,
    height:150,
    margin: wp(2),
  },
  imagePlaceholder: {
    height: hp(20),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    padding: wp(2),
  },
  saveButton: {
    backgroundColor: "#4F75FF",
    padding: wp(.5),
    alignItems: "center",
    borderRadius: 5,
    marginTop: hp(2),
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
