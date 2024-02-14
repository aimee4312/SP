import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import Landing from './components/auth/Landing';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing"
          component={ LandingScreen }
          options={{ headShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
