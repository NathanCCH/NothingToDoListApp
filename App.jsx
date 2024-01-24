/**
 * My To Do List App
 *
 * @format
 */

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import React from 'react';
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
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;