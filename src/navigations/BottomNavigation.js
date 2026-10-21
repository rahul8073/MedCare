
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/Categories';
import Carts from '../screens/Carts';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import theme from '../utils/theme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Tabs = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabelVisibilityMode: 'labeled',
                // Icon and label colors
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.black,

                // Label styling
                tabBarLabelStyle: {
                    fontSize: responsiveFontSize(1.5),
                    fontWeight: '900',
                },

                // Tab bar styling
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: theme.colors.white,
                    // iOS shadow
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: -4, // Shadow towards the top
                    },
                    shadowOpacity: 1,
                    shadowRadius: 6,

                    // Android shadow
                    elevation: 10,
                },
            })}
        >
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: Platform.select({
                        ios: { type: 'sfSymbol', name: 'house' },
                        android: { type: 'materialSymbol', name: 'home' },
                    }),
                }}
            />

            <Tabs.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarIcon: Platform.select({
                        ios: { type: 'sfSymbol', name: 'square.grid.2x2' },
                        android: { type: 'materialSymbol', name: 'grid_view' },
                    }),
                }}
            />

            <Tabs.Screen
                name="Carts"
                component={Carts}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: Platform.select({
                        ios: { type: 'sfSymbol', name: 'cart' },
                        android: { type: 'materialSymbol', name: 'shopping_cart' },
                    }),
                }}
            />

            <Tabs.Screen
                name="Orders"
                component={Orders}
                options={{
                    tabBarIcon: Platform.select({
                        ios: { type: 'sfSymbol', name: 'receipt' },
                        android: { type: 'materialSymbol', name: 'receipt_long' },
                    }),
                }}
            />

            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: Platform.select({
                        ios: { type: 'sfSymbol', name: 'person' },
                        android: { type: 'materialSymbol', name: 'person' },
                    }),
                }}
            />
        </Tabs.Navigator>
    );
}

