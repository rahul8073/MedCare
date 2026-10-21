import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
import theme from '../utils/theme'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { checkLocationPermission } from '../utils/locationPermissions'
export default function CreateProfile({ navigation }) {
    const handleContinue = async () => {
        const isLocationAllowed = await checkLocationPermission();
        if (isLocationAllowed) {
            navigation.navigate('Main');
        } else {
            navigation.navigate('LocationPermission');
        }
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <CustomHeader
                showBackButton={true}
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Create Your Profile
                </Text>
                <Text style={styles.headerSubTitle}>
                    Fill in your details to get started
                </Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>
                    Full Name
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Full name"
                    />
                </View>
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
                <Text style={styles.formTitle}>
                    Email Address
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter  email  address"
                    />
                </View>
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                    <Text style={styles.continueButtonText}>
                        Continue
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
        // justifyContent: 'center',
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
        fontSize: responsiveFontSize(2.2),
        fontWeight: '500',
        color: theme.colors.black,
        marginBottom: responsiveHeight(1)
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
        marginBottom: responsiveHeight(2.5)
    },
    inputText: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.black,
        fontWeight: 'bold',
        marginLeft: 15,
        borderRightWidth: 1,
        borderColor: theme.colors.border,
        paddingRight: 10
    },
    textInput: {
        fontSize: responsiveFontSize(2.2),
        color: theme.colors.black,
        marginLeft: 10
    },
    continueButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: responsiveHeight(1.5),
        borderRadius: 20,
        marginTop: responsiveHeight(5),
        alignItems: 'center'
    },
    continueButtonText: {
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