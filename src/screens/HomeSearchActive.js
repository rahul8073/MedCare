import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../utils/theme'

import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
export default function HomeSearchActive({ navigation }) {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.searchContainer}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Icon name='search-outline' size={responsiveFontSize(3)} color={theme.colors.black} />
                    <TextInput
                        placeholder='Search ...'
                        style={styles.textInput}
                    />

                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Entypo name='cross' size={responsiveFontSize(3)} color={theme.colors.textMuted} />
                </TouchableOpacity>
            </View>
            <View style={styles.recentSearchContainer}>
                <Text style={styles.recentTitle}>Recent Searches</Text>
                {
                    Array.from({ length: 5 }).map((_, ind) => (
                        <TouchableOpacity key={ind} style={styles.recentButton}>
                            <Icon name='search-outline' size={responsiveFontSize(3)} color={theme.colors.textMuted} />
                            <Text style={styles.recentText}>Paracetamol</Text>
                        </TouchableOpacity>

                    ))
                }

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: responsiveWidth(3)
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: responsiveWidth(3),
        paddingHorizontal: responsiveWidth(2),
        backgroundColor: theme.colors.primaryTint

    },
    textInput: {
        width: '80%',
    },
    recentSearchContainer: {
        marginVertical: responsiveHeight(1),
    },
    recentTitle: {
        ...theme.typography.h2
    },
    recentButton: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: responsiveHeight(1)
    },
    recentText: {
        color: theme.colors.textMuted,
        fontSize: responsiveFontSize(2),
    }

})