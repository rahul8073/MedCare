import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigations/StackNavigation'
import { AuthProvider } from './src/context/AuthContext'
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  )
}