import React from 'react';
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { Search } from './Search';
import SplashScreen from './SplashScreen';
import SignIn from './SignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScanProducts } from './ScanProducts';

const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
    return (
        <View>
            <Text style={{ color: 'black' }}> Home Screen !</Text>
        </View>
    )
}

function SettingsScreen() {
    return (
        <View>
            <Text style={{ color: 'black' }}> Setting Screen !</Text>
        </View>
    )
}


export default function Nav(){
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: (() => {
                        if (route.name == "Home") {
                            return <Ionicons name={'home'} size={20} color={'#2F3C98'} />;
                        } 
                        // else if (route.name == "Sign Up") {
                        //     return <Ionicons name={'person-outline'} size={20} color={'#2F3C98'} />;
                        // }
                        else if (route.name == "Search") {
                            return <Ionicons name={'search'} size={20} color={'#2F3C98'} />;
                        }
                        else if (route.name == "Scan") {
                            return <Ionicons name={'scan-outline'} size={20} color={'#2F3C98'} />;
                        }
                    })
                })}
                barStyle={{ backgroundColor: '#DEDEDE' }}>
                <Tab.Screen name="Home" component={SplashScreen} />
                {/* <Tab.Screen name="Sign Up" component={SignIn} /> */}
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Scan" component={ScanProducts} />
            </Tab.Navigator>
    );
}