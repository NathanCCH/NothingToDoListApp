import React from 'react';
import {useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Image
} from 'react-native';


function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    
      const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
      };
    
      const removeTask = () => {
        let newTasks = [...tasks];
        newTasks.pop(); // pop the last task off the array
        setTasks(newTasks); 
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        image: {
          width: 300, // Set the width and height as desired
          height: 300,
        },
        buttonContainer: {
          marginTop: 10, // Adds space above the button
          width: '80%', // Set the width of the buttons
        },

      });
    

    return (
      <MainLayout>
        <SafeAreaView style={styles.container}>        
        <Image
        source={require('../icon.jpg')}
        style={styles.image}
      />

        <View style={styles.buttonContainer}>
          <Button 
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
        
        </SafeAreaView>

</MainLayout>
      
    );
}
export default HomeScreen;