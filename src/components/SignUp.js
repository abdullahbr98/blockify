import * as React from 'react';
import { input, buttonStyle, link } from '../Utils/styles';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
const {heightDevice,widthDevice} = Dimensions.get('window');
import Constants from 'expo-constants';
import NavExample from './NavExample'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function SignIn({navigation}) {
  return (
    <>
      <View style={{backgroundColor: '#FAFAFA'}}>
      
        <View style={styles.c0}>
          <TouchableOpacity onPress={() => navigation.navigate('SplashScreen')}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../assets/up-left.png')}
              />
          </TouchableOpacity>
        </View>
      
        <View style={styles.container}>
          <View style={styles.c1}>
            <Text style={styles.h1}>Create new account</Text>
            <Text style={styles.h2}>Please fill in the form to continue.</Text>
          </View>

          <View style={styles.c2}>
            <TextInput style={styles.input1} placeholder={'User Name'} />
            <TextInput
              style={styles.input1}
              placeholder={'Email Address'}
            />
            <TextInput style={styles.input1} placeholder={'Phone Number'} />
            <TextInput
              style={styles.input1}
              secureTextEntry={true}
              placeholder={'Password'}
            />
          </View>
          <View style={styles.c3}>
            <TouchableOpacity
              style={styles.logoButtonStyle}
              activeOpacity={0.7}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/google.png')}
                />
                <Text style={{ color: 'black', fontSize: 18 }}>
                  {' '}
                  Sign Up With Google{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logoButtonStyle}
              activeOpacity={0.7}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/facebook.png')}
                />
                <Text style={{ color: 'black', fontSize: 18 }}>
                  {' '}
                  Sign Up With Facebook{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonStyle, { paddingVertical: 12 }]}
              activeOpacity={0.7}>
              <Text style={{ color: 'white', fontSize: 18 }}> Sign in </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.c4}>
            <Text style={{ color: '#787A85', marginVertical: 10 }}>
              Already have an account?<Text style={styles.link} onPress={() => navigation.navigate('SignIn')}> Sign In</Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexBasis:900,
    alignItems: 'center',
    backgroundColor:'#FAFAFA',
  },
  c0: {
    flexBasis: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginTop:20,
  },
  c1: {
    flexBasis: 90,
    alignItems: 'center',
  },
  h1: {
    color: '#2F3C98',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    color: '#686873',
    fontSize: 15,
  },
  c2: {
    flexBasis: 300,
    alignItems: 'center',
  },
  input1: {
    ...input,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonStyle,
  logoButtonStyle: {
    ...buttonStyle,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 5,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    paddingVertical: 12,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  c3: {
    flexBasis: 200,
  },
  c4:{
    flexBasis:100,
  },
  link
});
