import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import theme from '../utils/theme'
export default function CustomHeader({
    title = '',
    subTitle = '',
    showBackButton = false,
    onBackPress = () => { },
    bellIcon = false,
}) {
    return (
        <View style={styles.container}>
            {showBackButton && (
                <TouchableOpacity onPress={onBackPress}>
                    <Ionicons name='chevron-back' size={35} color='#858282' />
                </TouchableOpacity>
            )}
            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    {title ? <Text style={styles.title}>{title}</Text> : null}
                    {subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : null}
                </View>
                {
                    bellIcon && (
                        <TouchableOpacity>
                            <Ionicons name='notifications-outline' size={responsiveFontSize(3)} color={theme.colors.black} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleContainer: {
        marginLeft: 16,
    },
    title: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.text,
    },
    subTitle: {
        fontSize: responsiveFontSize(2.5),
        color: theme.colors.black,
        fontWeight: '900',
    },
})