import * as React from 'react';
import { Nav } from './Nav';
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
  Platform,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
const { height } = Dimensions.get('window');
import Barcode from './Barcode';

export const ScanProducts = () => {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaViewModify}>
        <View style={styles.root}>
          <View style={styles.c0}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/up-left.png')}
            />
            <Image
              style={styles.profile}
              source={require('../assets/username.png')}
            />
          </View>
          <View style={styles.c1}>
            <Text style={styles.h1}>Point Towards the Barcode</Text>
          </View>
          {/* <View style={styles.c2}>
                        
                    </View> */}
          <Barcode />

          <View style={styles.c3}>
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.7}>
              <Text style={{ color: 'white', fontSize: 18 }}> Search </Text>
            </TouchableOpacity>
            <Text style={{ color: '#787A85', marginVertical: 10 }}>
              Finalized the product?
              <Text style={styles.link}> Order now</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaViewModify: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  root: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    height: height,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  c0: {
    flex: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  c1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    color: '#2F3C98',
    fontSize: 45,
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
    width: 210,
    paddingVertical: 18,
    borderRadius: 50,
    marginTop: 73,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  c2: {
    width: 500,
    height: 400,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    overflow: 'hidden',
  },
  link: {
    color: '#2F3C98',
    fontWeight: 'bold',
  },
  c3: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#2F3C98',
    borderRadius: 100,
    backgroundColor: '#2F3C98',
  },
  searchBarStyle: {
    borderRadius: 10,
    shadowColor: 'white',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
});
