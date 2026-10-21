import { Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../utils/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { requestLocationPermission } from '../utils/locationPermissions';
export default function LocationPermission() {

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Location.png')} style={styles.image} />
                </View>
                <Text style={styles.title}>Allow Location Accerss</Text>
                <Text style={styles.description}>
                    Enable location to fined pharmacies and deliver medicines to you.
                </Text>
                <TouchableOpacity style={styles.permissionButton}>
                    <Text style={styles.permissionButtonText} onPress={async () => await requestLocationPermission()}>Allow Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.manualButton}>
                    <Text style={styles.manualButtonText}>Enter Location Manually</Text>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        width: responsiveWidth(50),
        height: responsiveWidth(50),
        resizeMode: 'cover',
    },
    title: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.textMuted,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 30,
    },
    permissionButton: {
        ...theme.components.primaryButton,
        width: responsiveWidth(80),
        marginBottom: 15,
    },
    permissionButtonText: {
        color: theme.colors.white,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    manualButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,

    },
    manualButtonText: {
        color: theme.colors.primary,
        textDecorationLine: 'underline',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
})