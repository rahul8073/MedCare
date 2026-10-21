
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkLogin();

    }, [])
    const checkLogin = async () => {
        try {
            const savedUser = await AsyncStorage.getItem('user');
            const savedToken = await AsyncStorage.getItem('token');
            if (savedUser && savedToken) {
                setUser(JSON.parse(savedUser));
                setToken(savedToken)
            }

        } catch (error) {
            console.log("Login Error: ", error);

        } finally {
            setLoading(false)
        }

    }

    const Login = async (userData, userToken) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            await AsyncStorage.setItem('token', userToken);

            setToken(userToken);
            setUser(userData);
        } catch (error) {
            console.log('Login Error: ', error);

        }
    }

    const Logout = async () => {
        try {
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('token');
            setToken(null);
            setUser(null)

        } catch (error) {
            console.log("Logout Error: ", error);

        }
    }

    return (
        <AuthContext.Provider
            value={
                {
                    user,
                    token,
                    loading,
                    Login,
                    Logout,
                    isAuthenticate: !!token,
                }

            }>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}