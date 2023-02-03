import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import RestaurentScreen from './src/screens/RestaurentScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurent" component={RestaurentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
