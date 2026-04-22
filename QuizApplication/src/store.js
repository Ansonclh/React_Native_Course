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
    answerQuestion: (state, action) => {
      if (state.questions[state.currentQuestionIndex].answer === action.payload) {
        state.score += 1;
      }
      state.currentQuestionIndex += 1;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
    }
  },
});

// Export actions
export const { answerQuestion, resetQuiz } = quizSlice.actions;

// Create and export the store
const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

export default store;
