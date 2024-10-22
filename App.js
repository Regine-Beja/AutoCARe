import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MechanicProfileScreen from './screens/MechanicProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}  // Disable header on the login screen
        />
        <Stack.Screen 
          name="MechanicProfile" 
          component={MechanicProfileScreen} 
          options={{ headerShown: false }}  // Disable default header on the MechanicProfileScreen
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
