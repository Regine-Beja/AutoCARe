import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [isMechanicPressed, setMechanicPressed] = useState(false);
  const [isCarOwnerPressed, setCarOwnerPressed] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Log In As</Text>

      <TouchableOpacity
        style={[
          styles.buttonMechanic,
          isMechanicPressed && { backgroundColor: '#f4b300' }, // Change color on press
        ]}
        onPressIn={() => setMechanicPressed(true)}
        onPressOut={() => setMechanicPressed(false)}
        onPress={() => navigation.navigate('MechanicProfile')}
      >
        <Text style={styles.buttonText}>Mechanic</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonCarOwner,
          isCarOwnerPressed && { backgroundColor: '#f4b300' },
        ]}
        onPressIn={() => setCarOwnerPressed(true)}
        onPressOut={() => setCarOwnerPressed(false)}
        onPress={() => alert('Car Owner functionality not implemented yet')}
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
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: {
    width: 100,
    height: 100,
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
