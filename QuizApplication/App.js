import React from 'react';
import { Provider} from 'react-redux';
import { StyleSheet} from 'react-native';
import store from './src/store';
import Quiz from './src/Quiz';

export default function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

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
});
