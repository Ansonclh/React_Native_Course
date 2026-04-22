import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { answerQuestion, resetQuiz } from './store';
import QuizDetails from './QuizDetails';

const Quiz = () => {
  const { questions, currentQuestionIndex, score } = useSelector((state) => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];

  const dispatch = useDispatch();
  const handleAnswer = (option) => {
    dispatch(answerQuestion(option));
  }
  const handleReset = () => {
    dispatch(resetQuiz())
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Completed!</Text>
        <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
        <Button title="Restart Quiz" onPress={() => handleReset()} color="#FF4081" />
      </View>
    )
  }
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <QuizDetails/>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          <View style={styles.buttonContainer}>
            {currentQuestion.options.map((option) => (
            <Button key={option} title={option} onPress={() => handleAnswer(option)} color="#FF4081" /> 
          ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  scoreText: {
    fontSize: 22,
    marginTop: 20,
    color: '#4CAF50',
  },
  questionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    height: 300,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  detailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    elevation: 5,
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});
export default Quiz;
