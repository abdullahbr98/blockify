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
import NavExample from './NavExample'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function SplashScreen({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/Blockify-full.png')}
        />
        <Text style={styles.logoDesc}> Become a verified Seller now </Text>
      </View>
      <View style={{ flexBasis: 120 }}>
        <Text style={styles.textInfo}>
          {' '}
          Sell your products that are verified by authentic manufacturers via
          blockchain.{' '}
        </Text>
      </View>
      <View style={styles.buttonFlex}>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: 'white' }}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#DDDFE8' }]} activeOpacity={0.7} onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ color: 'black' }}> Sign In </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 500,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tinyLogo: {
    height: 240,
    width: 224,
    margin: 10,
    marginTop: 100,

  },
  logoDesc: {
    fontSize: 35,
    textAlign: 'center',
    color: '#787A85',
  },
  textInfo: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 20,
    color: '#787A85',
  },
  buttonFlex: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#2F3C98',
    width: 150,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    margin: 2,
  },
});