import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const MechanicProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [expertise, setExpertise] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Text style={styles.title}>Mechanic's Information</Text>
      
      <View style={styles.profilePicture}>
        <Text style={styles.profileIcon}>👤</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#d3d3d3"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor="#d3d3d3"
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expertise</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your expertise"
          placeholderTextColor="#d3d3d3"
          value={expertise}
          onChangeText={setExpertise}
        />
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => { /* Handle profile submission */ }}
      >
        <Text style={styles.buttonText}>Add Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11324D',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 40,
    marginBottom: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    fontSize: 40,
    color: '#ffffff',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
    fontSize: 18,
    color: '#ffffff',
    paddingBottom: 5,
  },
  button: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MechanicProfileScreen;
