import { ActivityIndicator, Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import theme from '../utils/theme'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function SplashScreen({ navigation }) {
    const { isAuthenticate, loading } = useAuth();
    const iconScale = useRef(
        new Animated.Value(0.1)
    ).current;
    const iconOpacity = useRef(
        new Animated.Value(0)
    ).current;
    const titleOpacity = useRef(
        new Animated.Value(0)
    ).current;
    const titleTranslateY = useRef(
        new Animated.Value(30)
    ).current;
    const subTitleOpacity = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        Animated.sequence([
            // icon animation
            Animated.parallel([
                Animated.spring(iconScale, {
                    toValue: 1,
                    friction: 5,
                    tension: 60,
                    useNativeDriver: true
                }),
                Animated.timing(iconOpacity, {
                    toValue: 1,
                    duration: 600,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true
                })
            ]),
            //title animation
            Animated.parallel([
                Animated.timing(titleOpacity, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true
                }),
                Animated.timing(titleTranslateY, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true
                }),
                //subtitle Animated
            ]),
            Animated.timing(subTitleOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.delay(800)
        ]).start(async () => {
            const hasSeenOnboarding = await AsyncStorage.getItem('hasSeenOnboarding')
            if (hasSeenOnboarding) {

                navigation.replace('Onboarding')
            } else if (isAuthenticate) {

                navigation.replace('Home')
            } else {

                navigation.replace('Login')
            }
        })

    }, [
        navigation,
        iconScale,
        iconOpacity,
        titleOpacity,
        titleTranslateY,
        subTitleOpacity,

    ])

    return (

        <LinearGradient
            colors={theme.gradients.splash}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Animated.View
                style={[
                    styles.iconContainer, {
                        opacity: iconOpacity,
                        transform: [
                            {
                                scale: iconScale
                            }
                        ]
                    }
                ]}
            >

                <FontAwesome5 name='hand-holding-medical' style={styles.icon} />
            </Animated.View>
            <Animated.View
                style={
                    {
                        opacity: titleOpacity,
                        transform: [
                            {
                                translateY: titleTranslateY
                            },
                        ]
                    }
                }
            >
                <Text style={styles.headerTitle}>MediCare</Text>

            </Animated.View>
            <Animated.Text
                style={[
                    styles.headerSubtitle,
                    {
                        opacity: subTitleOpacity
                    }

                ]}
            >Your Health, Our Priority</Animated.Text>
            {
                loading && (
                    <ActivityIndicator color={theme.colors.white} size={responsiveWidth(10)} style={styles.loadingContainer} />
                )
            }

        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: responsiveFontSize(7),
        color: theme.colors.white
    },
    headerTitle: {
        color: theme.colors.white,
        fontSize: responsiveFontSize(6),
        fontWeight: '900',
        letterSpacing: responsiveWidth(1.5),
        marginTop: responsiveHeight(1)
    },
    headerSubtitle: {
        ...theme.typography.h3,
        color: theme.colors.white,
    },
    loadingContainer: {
        position: 'absolute',
        bottom: responsiveHeight(5),
        width: 50,
        height: 50,
        alignSelf: 'center',
    },



})