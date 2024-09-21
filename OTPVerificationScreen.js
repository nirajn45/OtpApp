import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message'; // Import Toast

const OTPVerificationScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [testOtp, setTestOtp] = useState(''); // State to store the OTP

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);

      // Display a toast confirming OTP has been sent
      Toast.show({
        type: 'success',
        text1: 'OTP Sent!',
      });

      // For test numbers, automatically fetch the OTP from Firebase
      const testNumbers = {
        '+916204991247': '634567',
        '+916205991247': '344567',
        '+917204991247': '434567',
        '+915204991247': '394567', // Replace with your test phone number and assigned OTP from Firebase Console
        // Add more test numbers and corresponding OTPs if needed
      };

      if (testNumbers[phoneNumber]) {
        const otp = testNumbers[phoneNumber];
        setTestOtp(otp);

        // Display the OTP in a toast notification for testing purposes
        Toast.show({
          type: 'info',
          text1: `Test OTP is: ${otp}`,
        });
      }

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Error: ${error.message}`,
      });
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      Toast.show({
        type: 'success',
        text1: 'Phone Number Verified!',
      });
      navigation.navigate('Success');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Invalid OTP!',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={confirm ? 'unlock' : 'lock'} size={50} color="white" />
      </View>

      <View style={styles.contentContainer}>
        {!confirm ? (
          <>
            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.subtitle}>Verify your account details</Text>
            <Text style={styles.subtitle}>We'll send a one-time password to your number</Text>
            <Text style={styles.subtitles}>Enter your mobile number</Text>
            <TextInput
              placeholder="Phone Number"
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="phone-pad"
              style={styles.input}
            />
            <Button title="Get Code" onPress={signInWithPhoneNumber} color="#FF5722" />
          </>
        ) : (
          <>
            <Text style={styles.title}>Verification Code</Text>
            <Text style={styles.subtitle}>Please enter the code sent to {phoneNumber}</Text>
            <TextInput
              placeholder="OTP Code"
              onChangeText={(text) => setCode(text)}
              keyboardType="numeric"
              style={styles.input}
            />
            <Button title="Verify" onPress={confirmCode} color="#FF5722" />
          </>
        )}
      </View>
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
    marginTop: 47,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Adjusted to match the theme color
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  contentContainer: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitles: {
    marginTop: 60,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF5722',
    marginBottom: 40,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default OTPVerificationScreen;
