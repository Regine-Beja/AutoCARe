import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image, Alert, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // For the back arrow

const MechanicProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [expertise, setExpertise] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // State to handle modal visibility

  // Function to handle the form submission
  const handleAddProfile = () => {
    if (name === '' || address === '' || expertise === '') {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    // Open the pop-up/modal after pressing "Add Profile"
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Custom Header */}
      <View style={styles.headerContainer}>
        {/* Logo aligned to the upper left */}
        <Image 
          source={require('../AClogo.png')}  // Ensure the path to your logo is correct
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Custom back arrow below the logo */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
          <Ionicons name="chevron-back" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Mechanic's Information</Text>
      
      <View style={styles.profilePicture}>
        <Image 
          source={require('../Profile1.png')}
          style={styles.profileImage}
        />
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
        onPress={handleAddProfile}  // Handle button press to show pop-up
      >
        <Text style={styles.buttonText}>Add Profile</Text>
      </TouchableOpacity>

      {/* Modal for Select Profile Picture */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} // Close modal on request
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Select profile picture</Text>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)} // Close modal on button press
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  headerContainer: {
    width: '100%',
    position: 'absolute',  // Position the header absolutely to move it higher on the screen
    top: 5,  // Adjust this value to move the header up or down
    left: 20,  // Slight padding to move the logo and arrow away from the edge
    alignItems: 'flex-start',  // Align the logo and arrow to the left
    backgroundColor: '#11324D',
    zIndex: 5,  // Ensure the header is above other content
  },
  logoContainer: {
    alignItems: 'flex-start',  // Align logo to the left
  },
  logo: {
    width: 130,
    height: 130,
  },
  backArrow: {
    marginTop: -20,  // Space between the logo and the arrow
    marginLeft: 10, // Slight padding to the left for the arrow
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 60,  // Increase margin to push title down, since the header is now positioned higher
    marginBottom: 20,
  },  
  profilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
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
  // Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontSize: 18,
    color: '#11324D',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
});

export default MechanicProfileScreen;