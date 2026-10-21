import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../utils/theme'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
export default function Login({ navigation }) {
    const handleLogin = async () => {
        navigation.navigate('VarifyOtp', { 'mobileNumber': '+919999999999', 'otp': '123456' })
    }
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Welcome Back!
                </Text>
                <Text style={styles.headerSubTitle}>
                    Login to contiue to your account and access your personalized healthcare experience.
                </Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>
                    Mobile Number
                </Text>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name='mobile-alt' size={responsiveFontSize(2.5)} color={theme.colors.black} />
                    <Text style={styles.inputText}>
                        +91
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your mobile number"
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>OR</Text>
                    <View style={styles.divider} />
                </View>
                <TouchableOpacity style={styles.googleButton}>
                    <FontAwesome5 name='google' size={responsiveFontSize(2.5)} color={theme.colors.black} />
                    <Text style={styles.googleButtonText}>
                        Continue with Google
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    headerContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    headerText: {
        fontSize: responsiveFontSize(5),
        fontWeight: 'bold',
        color: theme.colors.black,
    },
    headerSubTitle: {
        fontSize: responsiveFontSize(1.7),
        color: theme.colors.textMuted,
        marginTop: 5
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: responsiveHeight(5),

        padding: 10
    },
    formTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: theme.colors.black,
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: responsiveWidth(4),
        paddingHorizontal: 10,
        paddingVertical: responsiveHeight(0.5),
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputText: {
        fontSize: responsiveFontSize(2.5),
        color: theme.colors.black,
        fontWeight: 'bold',
        marginLeft: 15,
        borderRightWidth: 1,
        borderColor: theme.colors.border,
        paddingRight: 10
    },
    textInput: {
        fontSize: responsiveFontSize(2.5),
        color: theme.colors.black,
        marginLeft: 10
    },
    loginButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: responsiveHeight(2),
        borderRadius: 20,
        marginTop: responsiveHeight(4),
        alignItems: 'center'
    },
    loginButtonText: {
        color: theme.colors.white,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold'
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: theme.colors.border
    },
    dividerText: {
        marginHorizontal: 10,
        color: theme.colors.textSecondary
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        paddingVertical: responsiveHeight(2),
        borderWidth: 1,
        borderColor: theme.colors.border,

        borderRadius: responsiveWidth(4),
        justifyContent: 'center',
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 3.84,
        elevation: 5,
    },
    googleButtonText: {
        color: theme.colors.black,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        marginLeft: 10
    }
})