/**
 * My To Do List App
 *
 * @format
 */

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
    'Buy groceries'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView>
      <ToDoForm addTask={ addTask } />
      <ToDoList tasks={ tasks }/>
    </SafeAreaView>
  );
}

export default App; 