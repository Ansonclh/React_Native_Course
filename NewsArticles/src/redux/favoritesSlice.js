import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteArticles: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite: (state, action) => {
      const article = action.payload;
      const existingIndex = state.favoriteArticles.findIndex(
        (favArticle) => favArticle.idArticle === article.idArticle  //assuming articles have an 'id' property
      );
      if (existingIndex >= 0) {  //article is found, existingIndex >= 0, it means the article is already in the favorites list, so we remove it by splicing the array at that index. If existingIndex is -1, it means the article is not in the favorites list, so we add it by pushing it to the array.
        // Article already in favorites, remove it
        state.favoriteArticles.splice(existingIndex, 1);
      } else {
        // Article not in favorites, add it
        state.favoriteArticles.push(article);
      }
   }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
