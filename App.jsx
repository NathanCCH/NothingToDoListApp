/**
 * My To Do List App
 *
 * @format
 */

import ToDoForm from './src/components/ToDoForm';
import ToDoList from './src/components/ToDoList';
import HomeScreen from './src/components/HomeScreen';
import AboutScreen from './src/components/AboutScreen';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      {/* <SafeAreaView>
        <ToDoForm addTask={ addTask } />
        <ToDoList tasks={ tasks }/>
      </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App; 