import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [isLight, setIsLight] = useState(true);
  return (
      <View style={styles.container}>
          <View style={styles.card}>
             
              <Image
                  source={{ uri:'https://i.pinimg.com/736x/bf/15/ba/bf15bad74ef5471147feb657a4086f3b.jpg'}}
                  style={styles.profileImage}
              />
              
              
              <View style={styles.textContainer}>
                  <Text style={styles.title}>Rembo</Text>
                  <Text style={styles.subtitle}>Last Blood</Text>
              </View>
              
              
              <TouchableOpacity style={[styles.subscribeButton, {backgroundColor: isLight? 'blue' : 'red'} ]} onPress={() => setIsLight(prev => !prev)}>
                  <Text style={styles.buttonText}>Subscribe</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4', 
  },
  card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      width: '90%',
  },
  profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
  },
  textContainer: {
      flex: 1,
      marginLeft: 10,
  },
  title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
  },
  subtitle: {
      fontSize: 14,
      color: '#888',
  },
  subscribeButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
  },
  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
  },
});
