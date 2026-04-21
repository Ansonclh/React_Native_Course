// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import quizQuestions from './quizQuestions'; // Fix the import

// Create a quiz slice
const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: quizQuestions,
    currentQuestionIndex: 0,
    score: 0,
  },
  reducers: {

  },
});

// Export actions

// Create and export the store
const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

export default store;
