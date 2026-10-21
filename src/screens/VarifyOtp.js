import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../utils/theme'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../components/CustomHeader';
export default function VarifyOtp({ navigation, route }) {
    const { mobileNumber, otp } = route.params;
    const handleVerify = () => {
        navigation.navigate('CreateProfile', { mobileNumber, otp });
    }
    return (
        <SafeAreaView style={styles.safeContainer}>
            <CustomHeader
                showBackButton={true}
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Verify Mobile Number
                </Text>
                <Text style={styles.headerSubTitle}>
                    Otp Sent to {mobileNumber}
                </Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                    />
                    <TextInput
                        style={styles.textInput}

                    />
                    <TextInput
                        style={styles.textInput}

                    />
                    <TextInput
                        style={styles.textInput}

                    />
                </View>
                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>
                        Didn't receive the OTP?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.resendButtonText}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyButtonText}>
                        Verify
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
    },
    headerContainer: {
        padding: 20,
    },
    headerText: {
        ...theme.typography.h1,
    },
    headerSubTitle: {
        ...theme.typography.caption,
        fontSize: responsiveFontSize(2.3),
        marginTop: responsiveHeight(0.5),
    },
    formContainer: {
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        textAlign: 'center',
        fontSize: responsiveFontSize(3),
        fontWeight: '900'
    },
    verifyButton: {
        ...theme.components.primaryButton,

    },
    verifyButtonText: {
        color: theme.colors.white,
        fontWeight: '900',
        fontSize: responsiveFontSize(2.5),
    },
    resendContainer: {
        flexDirection: 'row',
        columnGap: responsiveWidth(4),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: responsiveHeight(3),
    },
    resendText: {
        color: theme.colors.textSecondary,
        fontSize: responsiveFontSize(2.3),
    },
    resendButtonText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.3),
    },

})