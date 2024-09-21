import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="check" size={50} color="white" />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Congratulations</Text>
        <Text style={styles.subtitle}>Your account has been verified</Text>
      </View>
      <Image
          source={{ uri: 'https://account.sms.cx/assets/img/logo-big.png' }} // Replace with your image URL
          style={styles.image}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    
  },
  iconContainer: {
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Green color for success
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 47,
    marginBottom: 40,
  },
  messageContainer: {
    marginTop: 50,
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain', // Keep the image aspect ratio and scale it to fit the container.
  },
});

export default SuccessScreen;
