import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import HomeScreen from '../screens/HomeScreen';
import VarifyOtp from '../screens/VarifyOtp';
import CreateProfile from '../screens/CreateProfile';
import LocationPermission from '../screens/LocationPermission';
import HomeSearchActive from '../screens/HomeSearchActive';
import BottomNavigation from './BottomNavigation';
export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Onboarding' component={OnBoardingScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='VarifyOtp' component={VarifyOtp} />
            <Stack.Screen name='CreateProfile' component={CreateProfile} />
            <Stack.Screen name='LocationPermission' component={LocationPermission} />
            <Stack.Screen name='Main' component={BottomNavigation} />
            <Stack.Screen name='HomeSearchActive' component={HomeSearchActive} />
        </Stack.Navigator>
    )
}