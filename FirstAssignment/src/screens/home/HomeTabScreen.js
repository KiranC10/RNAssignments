import React, { Component } from 'react'
import {
    Text, View, ImageBackground,
    Image, TouchableOpacity,
    FlatList, ScrollView,
    TouchableWithoutFeedback,
    Dimensions, TextInput, Keyboard
} from 'react-native';

import styles from '../../constants/AppStyles';
import AppImages from '../../constants/AppImages';
import AppColors from "../../constants/AppColors";
import AppTexts from '../../constants/AppTexts';

const { height } = Dimensions.get('window');

export default class HomeTabScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    status: 'Featured',
                    name: "NIKE Sports Sneakers for Men",
                    originalPrice: '$100',
                    offerPrice: '$90',
                    iconFav: AppImages.favourite,
                    iconShoes: AppImages.nikeShoe,
                    featured: true
                },
                {
                    status: 'Featured',
                    name: "NIKE Sports Sneakers for Men",
                    originalPrice: '$100',
                    offerPrice: '$90',
                    iconFav: AppImages.favourite,
                    iconShoes: AppImages.nikeShoe,
                    new: true
                }
            ]
        }
    }

    // render header for Home
    renderHeader = () => {
        return (
            <View>
                <ImageBackground
                    imageStyle={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
                    source={AppImages.backgroundImage}
                    style={{ height: height * 0.45 }}>
                    <View marginTop={10}>

                        <View flexDirection='row' justifyContent='space-evenly'>
                            <View style={styles.headerSearchView}>
                                <Image
                                    style={[styles.icon, styles.cartIcon]}
                                    source={AppImages.search}
                                />
                                <TextInput
                                    flex={1}
                                    placeholder="Search"
                                    placeholderTextColor={AppColors.colorChocolate}
                                    padding={10}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    value={this.state.phoneNumber}
                                    returnKeyType='search'
                                    underlineColorAndroid="transparent"
                                    style={{ marginLeft: 25 }}
                                />
                            </View>
                            <TouchableOpacity style={styles.cartBtn}>
                                <Image
                                    style={[styles.icon, { alignSelf: 'center' }]}
                                    source={AppImages.cart}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View marginTop={10}>
                        <Text style={[styles.headerText, { textAlign: 'center' }]}>{AppTexts.headingFirst}</Text>
                        <Text style={[styles.headerText, { textAlign: 'right', marginRight: 30 }]}>{AppTexts.headingSecond}</Text>
                        <Text style={[styles.colorWhite, { textAlign: 'center' }]}>{AppTexts.subHeading}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.buyNowBtn}
                        onPress={() => { }}>
                        <Text style={styles.colorWhite}>{AppTexts.buyNow}</Text>
                        <Image
                            style={styles.icon}
                            source={AppImages.rightArrow} />
                    </TouchableOpacity>
                    <View style={styles.dots}>
                        <Image
                            style={[styles.smallIcon, { backgroundColor: 'white' }]}
                            source={AppImages.circle} />
                        <Image
                            style={styles.smallIcon}
                            source={AppImages.circle} />
                        <Image
                            style={styles.smallIcon}
                            source={AppImages.circle} />
                    </View>
                </ImageBackground>
            </View>
        );
    }

    // render featured and new collection data 
    renderItem = (item, index) => {
        return (
            <TouchableWithoutFeedback>
                <View padding={5} marginHorizontal={10} zIndex={20}>
                    <View style={styles.itemView}>
                        <View>
                            <Text style={[styles.itemStatus, {
                                backgroundColor: item.featured ? AppColors.colorGreen : AppColors.colorBlue,
                            }]}>{item.featured ? "Featured" : "new"}</Text>

                            <Text style={styles.itemName}>{item.name}</Text>
                            <View style={styles.priceView}>
                                <Text style={{ fontSize: 12, textDecorationLine: 'line-through' }}>{item.originalPrice}</Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', marginRight: 40 }}>{item.offerPrice}</Text>
                                <TouchableOpacity>
                                    <Image
                                        source={item.iconFav}
                                        style={styles.favIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image
                            source={item.iconShoes}
                            style={styles.iconShoes} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    {this.renderHeader()}
                    <View flex={1}>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            keyboardShouldPersistTaps={'handled'}
                            style={{ flex: 1 }}
                        >

                            <View padding={10}>

                                <Text style={{ padding: 10, fontWeight: 'bold' }}>{AppTexts.featuredCollect}</Text>

                                <View style={[styles.card]}>
                                    <FlatList
                                        data={this.state.options}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index }) => this.renderItem(item, index)}
                                        keyExtractor={(item, index) => index.toString()} />
                                </View>

                                <Text style={{ padding: 10, fontWeight: 'bold' }}>{AppTexts.newCollect}</Text>

                                <FlatList
                                    data={this.state.options}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => this.renderItem(item, index)}
                                    keyExtractor={(item, index) => index.toString()} />

                            </View>

                        </ScrollView>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}
