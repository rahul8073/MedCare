import { Animated, Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../utils/theme'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import onboard1 from '../assets/OnBoarding/onBoard1.png';
import onboard2 from '../assets/OnBoarding/onboard2.png';
import onboard3 from '../assets/OnBoarding/onboard3.png';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function OnBoardingScreen({ navigation }) {
    const onBoardingData = [
        {
            id: 1,
            image: onboard1,
            title: 'Your Medicines, Delivered',
            des: 'Order medicines and healthcare products from the comfort of your home'
        },
        {
            id: 2,
            image: onboard2,
            title: 'Fast & Reliable Delivery',
            des: 'Get your healthcare essentials delivered safety to your doorstep'
        },
        {
            id: 3,
            image: onboard3,
            title: 'Trusted Healthcare',
            des: 'Genuine products from trusted pharmacies and healthcare brands'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const handleNext = async () => {
        if (currentIndex < onBoardingData.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true
            })
            setCurrentIndex(currentIndex + 1)
        } else {

            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            navigation.replace('Login')
        }

    }
    const handleSkip = async () => {
        await AsyncStorage.setItem('hasSeenOnboarding', 'true');
        navigation.replace('Login')
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <View style={styles.imgContainer}>
                    <Image source={item.image} style={styles.image} resizeMode='contain' />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={4} >{item.des}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={theme.colors.primaryTint}
            // translucent={false}
            />
            <FlatList
                ref={flatListRef}
                data={onBoardingData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / Dimensions.get('window').width
                    );

                    setCurrentIndex(index);
                }}
                scrollEventThrottle={16}
            />
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                    <Text style={styles.nextText}>{currentIndex === onBoardingData.length - 1 ? 'Get Started' : 'Next'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    slide: {
        width: responsiveWidth(100),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: responsiveWidth(8)

    },
    imgContainer: {
        backgroundColor: theme.colors.primaryTint,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveWidth(50),
        padding: responsiveWidth(10),

    },
    image: {
        height: responsiveWidth(60),
        width: responsiveWidth(60),
    },
    title: {
        ...theme.typography.h1,
        marginTop: responsiveHeight(2),
        textAlign: 'center',
        // lineHeight: responsiveHeight(5),
        // fontSize: responsiveFontSize(5),
        fontWeight: '900',
        letterSpacing: responsiveWidth(0.8)
    },
    description: {
        ...theme.typography.caption,
        textAlign: 'center',
        marginVertical: responsiveHeight(0.5)
    },
    bottomContainer: {

    },
    nextButton: {
        ...theme.components.primaryButton,
        width: responsiveWidth(80),

    },
    nextText: {
        color: theme.colors.white,
        fontWeight: '900',

    },
    skipButton: {
        height: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: responsiveHeight(3)
    },
    skipText: {
        color: theme.colors.primary,
        fontWeight: '900',

    },
})