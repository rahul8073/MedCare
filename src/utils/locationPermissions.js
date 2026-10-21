import { PermissionsAndroid, Platform } from 'react-native';

export const checkLocationPermission = async () => {
    if (Platform.OS === 'ios') {
        // iOS permission checking needs a native/library-based approach.
        // This check function is for Android.
        return true;
    }

    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );

            console.log('Location permission allowed:', granted);

            return granted;
        } catch (err) {
            console.warn('Location permission check error:', err);
            return false;
        }
    }

    return false;
};


export const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
        // iOS handles runtime permission triggers automatically 
        // when you call Geolocation.getCurrentPosition
        return true;
    }

    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your location to show relevant data.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    }
};
