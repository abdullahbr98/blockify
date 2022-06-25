import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import styledComponents from 'styled-components';
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/native';


//commenting for styled components


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

export default function Seller() {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaViewModify}>
        <View style={styles.root}>
          <View style={styles.c0}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../assets/up-left.png')}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.c1}>
              <Text style={styles.h1}>Seller Control Panel</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder={'Enter Account Address'}
            />
            <TextInput
              style={styles.input}
              placeholder={'Enter Number of products'}
            />
            <View style={styles.c2}>
              <TouchableOpacity  style={styles.buttonStyle} activeOpacity={0.7}>
                <Text style={{ color: 'white', fontSize: 18 }}> Request Products </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  SafeAreaViewModify: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  root: {
    backgroundColor: '#FAFAFA',
  },
  container: {
    flexBasis: height,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  c0: {
    height: height / 12,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  c1: {
    height: height / 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  h1: {
    color: '#2F3C98',
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    color: '#787A85',
    fontSize: 40,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginVertical: 15,
    borderColor: '#DEDEDE',
    width: 320,
  },
  buttonStyle: {
    backgroundColor: '#2F3C98',
    width: 285,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 23,
  },
  c2: {
    height: height / 3,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  link: {
    color: '#2F3C98',
    fontWeight: 'bold',
  },
  c3: {
    marginTop: 20,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    height: height / 4,
  },
  logo: {
    flexDirection: 'row',
    flexBasis: 70,
    width: 180,
    justifyContent: 'space-between',
  },
});
