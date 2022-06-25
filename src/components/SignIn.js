import * as React from 'react';
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
import SelectDropdown from 'react-native-select-dropdown'
import Constants from 'expo-constants';
import NavExample from './NavExample'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const users = ["Seller", "Buyer", "Manufacturer"];
const {height,width} = Dimensions.get('window');
export default function SignIn({navigation}) {
  
  const [userType,setUserType] = React.useState('')
  

  const typeHandler = (selectedItem,Index) => {
    setUserType(selectedItem)
    if(userType == 'Manufacturer'){
      navigation.navigate('Manufacturer')
    }else if (userType=='Seller'){
      navigation.navigate('Seller')
    }
    else if(userType=='Buyer'){
      navigation.navigate('Nav')
    }
  }


  return (
    <>
      <View style={styles.root}>
        <View style={styles.c0}>
        <TouchableOpacity
        onPress={() => navigation.navigate('SplashScreen')}>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../assets/up-left.png')}
              
            />
        </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.c1}>
            <Text style={styles.h1}>Let's sign you in</Text>
            <Text style={styles.h2}>Welcome back.</Text>
            <Text style={styles.h2}>Sign in now!</Text>
          </View>

          <View style={styles.c2}>
            <TextInput
              style={styles.input}
              placeholder={'Phone, email or username'}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder={'Password'}
            />
          <TouchableOpacity onPress={typeHandler} style={styles.buttonStyle} activeOpacity={0.7}>
              <Text style={{ color: 'white', fontSize: 18 }} > Sign in </Text>
            </TouchableOpacity>
            <Text style={{ color: '#787A85', marginVertical: 10 }}>
              Dont have an account?<Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Register</Text>
            </Text>
          </View>

          <SelectDropdown
	data={users}
	onSelect={typeHandler}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>

          <View style={styles.c3}>
            <Text style={{ color: '#787A85' }}>Or login with</Text>
            <View style={styles.logo}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/google.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../assets/facebook.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  root:{
    backgroundColor:'#FAFAFA'
  },
  container: {
    flexBasis:900,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  c0: {
    flexBasis: 100,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginTop:20,
  },
  c1: {
    flexBasis: 180,
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
    flexBasis: 300,
    alignItems: 'center',
  },
  link: {
    color: '#2F3C98',
    fontWeight: 'bold',
  },
  c3: {
    marginTop: 20,
    flexBasis: 200,
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    flexBasis:70,
    // alignItems: 'space-between',
    width: 180,
    justifyContent: 'space-between',
  },
  containerDropdown: {
    flexBasis:100,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
