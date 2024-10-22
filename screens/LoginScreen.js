import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [isMechanicPressed, setMechanicPressed] = useState(false); // Mechanic button state
  const [isCarOwnerPressed, setCarOwnerPressed] = useState(false); // Car Owner button state

  return (
    <View style={styles.container}>
      {/* Logo positioned in the upper-left corner */}
      <Image 
        source={require('../AClogo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Log In As</Text>

      {/* Mechanic Button */}
      <TouchableOpacity
        style={[
          styles.buttonMechanic,
          isMechanicPressed && { backgroundColor: '#f4b300' }, // Change color on press
        ]}
        onPressIn={() => setMechanicPressed(true)} // Button press-in state
        onPressOut={() => setMechanicPressed(false)} // Button press-out state
        onPress={() => navigation.navigate('MechanicProfile')} // Navigate to MechanicProfile screen
      >
        <Text style={styles.buttonText}>Mechanic</Text>
      </TouchableOpacity>

      {/* Car Owner Button */}
      <TouchableOpacity
        style={[
          styles.buttonCarOwner,
          isCarOwnerPressed && { backgroundColor: '#f4b300' }, // Change color on press
        ]}
        onPressIn={() => setCarOwnerPressed(true)} // Button press-in state
        onPressOut={() => setCarOwnerPressed(false)} // Button press-out state
        onPress={() => alert('Car Owner functionality not implemented yet')} // Placeholder functionality
      >
        <Text style={styles.buttonText}>Car Owner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f3c57',
  },
  logo: {
    position: 'absolute',
    top: 5, // Adjust the top spacing
    left: 20, // Adjust the left spacing
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    marginBottom: 40,
  },
  buttonMechanic: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#f4b300',
    padding: 20,
    width: 170,
    height: 170,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonCarOwner: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#f4b300',
    padding: 20,
    width: 170,
    height: 170,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default LoginScreen;
