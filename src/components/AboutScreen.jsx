import React from 'react';
import MainLayout from '../layouts/MainLayout';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

function AboutScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    content: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 20,
      borderRadius: 10,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
    date: {
      fontSize: 16,
      textAlign: 'center',
      color: 'gray',
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 10,
      marginBottom: 20,
    },
  });

  return (
    <MainLayout>

        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Nothing to do</Text>
            
            <Text style={styles.date}>
              Just kidding! This is a simple to-do app built with React Native.
            </Text>
            <Text style={styles.date}>{new Date().toDateString()}</Text>
          </View>
        </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;