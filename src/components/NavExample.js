import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SplashScreen from './SplashScreen';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SendProducts from './SendProducts'
import Manufacturer from './Manufacturer'
import Seller from './Seller'
import Nav from './Nav'
export default function NavExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Manufacturer" component={Manufacturer} />
        <Stack.Screen name="SendProducts" component={SendProducts} 
        />
        <Stack.Screen name="Seller" component={Seller} 
        />
        <Stack.Screen name="Nav" component={Nav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
