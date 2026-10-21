import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
import theme from '../utils/theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { CategoriesData } from '../utils/Helper'
export default function HomeScreen({ navigation }) {


    return (
        <SafeAreaView style={styles.safeContainer}>
            <CustomHeader
                title='Good Morning'
                subTitle='Rahul'
                showBackButton={false}
                bellIcon={true}
            />
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.locationContainer}>
                    <Icon name='location-outline' size={responsiveFontSize(3)} color={theme.colors.primary} />
                    <View style={styles.locationTitleContainer}>
                        <Text style={styles.locationTitle}> Deliver to</Text>
                        <Text style={styles.locationText}>Ranchi, Jharkhand</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('HomeSearchActive')}>
                    <Icon name='search-outline' size={responsiveFontSize(3)} color={theme.colors.black} />
                    <Text style={styles.searchText}>Search Medicines, products...</Text>

                    <Icon name='chevron-forward-outline' size={responsiveFontSize(3)} color={theme.colors.textMuted} />
                </TouchableOpacity>
                <View style={styles.advertizementContainer}>
                    <View style={styles.contents}>
                        <Text style={styles.advTitle}>Healthcare at Your Doorstep</Text>
                        <Text style={styles.advOfferText}>Get up to 30% OFF</Text>
                        <Text style={styles.advText}>on Medicines</Text>
                        <TouchableOpacity style={styles.advButton}>
                            <Text style={styles.advButtonText}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>

                        <Image source={require('../assets/adver.png')} style={styles.advImage} />
                    </View>
                </View>

                <View style={styles.shopCategoryContainer}>
                    <View style={styles.shopCategoryHeader}>
                        <Text style={styles.shopCategoryTitle}>Shop By Category</Text>
                        <TouchableOpacity>
                            <Text style={styles.shopCategorySeeAll}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        {Array.from(
                            { length: Math.ceil(CategoriesData.length / 4) },
                            (_, rowIndex) => {
                                const rowItems = CategoriesData.slice(
                                    rowIndex * 4,
                                    rowIndex * 4 + 4
                                );

                                // 3 items: item, item, blank, item
                                const slots =
                                    rowItems.length === 3
                                        ? [rowItems[0], rowItems[1], null, rowItems[2]]
                                        : [
                                            ...rowItems,
                                            ...Array(4 - rowItems.length).fill(null),
                                        ];

                                return (
                                    <View key={rowIndex} style={styles.itemRow}>
                                        {slots.map((item, index) =>
                                            item ? (
                                                <View key={item.id} style={styles.categoryItem}>
                                                    <TouchableOpacity
                                                        style={[
                                                            styles.itemButton,
                                                            { backgroundColor: item.bgColor },
                                                        ]}
                                                    >
                                                        <Icon
                                                            name={item.icon}
                                                            color={item.color}
                                                            size={responsiveFontSize(2.5)}
                                                        />
                                                    </TouchableOpacity>

                                                    <Text style={styles.itemText} numberOfLines={2}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                            ) : (
                                                <View key={`blank-${index}`} style={styles.categoryItem} />
                                            )
                                        )}
                                    </View>
                                );
                            }
                        )}
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scrollContainer: {
        flex: 1
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
    },
    locationTitleContainer: {
        marginLeft: 8,
    },
    locationTitle: {
        fontSize: responsiveFontSize(1.5),
        color: theme.colors.text,
    },
    locationText: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.black,
        fontWeight: '900',
    },
    searchButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.white,
        marginHorizontal: responsiveWidth(2),
        borderRadius: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(0.5),
        marginTop: responsiveHeight(2),
        borderWidth: 1,
        borderColor: theme.colors.border,

    },
    searchText: {
        fontSize: responsiveFontSize(2.3),
        color: theme.colors.textMuted,
    },
    advertizementContainer: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.colors.primaryTint,
        marginHorizontal: responsiveWidth(2),
        borderRadius: responsiveWidth(3),
        padding: responsiveWidth(4),
        marginTop: responsiveHeight(2),
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    contents: {
        // flexDirection: 'column',
        // flex: 0.1,
    },
    advTitle: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.primaryDark,
        fontWeight: 'bold',
    },
    advOfferText: {
        fontSize: responsiveFontSize(1.5),
        color: theme.colors.primaryDark,
        fontWeight: 'bold',
    },
    advText: {
        fontSize: responsiveFontSize(1.3),
        color: theme.colors.primaryLight,
    },
    advButton: {
        backgroundColor: theme.colors.primary,
        padding: responsiveHeight(1.5),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(2),
        width: responsiveWidth(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    advButtonText: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.white,
        fontWeight: 'bold',
    },
    imageContainer: {
        // flex: 0.4
    },
    advImage: {
        height: responsiveWidth(40),
        width: responsiveWidth(35),
        resizeMode: 'cover'

    },
    shopCategoryContainer: {
        marginHorizontal: responsiveWidth(2),
        marginTop: responsiveHeight(2),
    },
    shopCategoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shopCategoryTitle: {
        fontSize: responsiveFontSize(2),
        color: theme.colors.text,
        fontWeight: 'bold',
    },
    shopCategorySeeAll: {
        fontSize: responsiveFontSize(1.5),
        color: theme.colors.primary,
    },
    itemContainer: {
        width: '100%',
        marginVertical: responsiveHeight(1.5),
    },

    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 18,
    },

    categoryItem: {
        width: '22%',
        alignItems: 'center',
    },

    itemButton: {
        width: 55,
        height: 55,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 6,
    },

})