import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import SplashScreen from './src/components/SplashScreen'
import SignIn from './src/components/SignIn'
import { Search } from './src/components/Search'
import SignUp from './src/components/SignUp'
import Experiment from './src/components/Experiment'
import NavBottom from './src/components/NavBottom'
import NavExample from './src/components/NavExample'
import LoadingScreen from './src/components/LoadingScreen'
// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import  {Nav}  from './src/components/Nav';
import Barcode from './src/components/Barcode'
import { ScanProducts } from './src/components/ScanProducts';

export default function App() {
  return (
    <>
      <Search />
    </>
  );
}
