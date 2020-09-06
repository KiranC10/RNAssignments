import React, { Component } from 'react';
import {
    View, TouchableWithoutFeedback
} from 'react-native';

import HomeTabScreen from '../home/HomeTabScreen'
import FavouritesTabScreen from '../favourites/FavouritesTabScreen';
import MenuTabScreen from '../menu/MenuTabScreen';
import ProductsTabScreen from '../products/ProductsTabScreen';
import ProfileTabScreen from '../profiles/ProfileTabScreen';

import styles from '../../constants/AppStyles';
import AppImages from '../../constants/AppImages';

import TabIcons from '../../componets/TabIcons';

export default class DashboardTabsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View flex={1}>
                    {this.state.tabIndex === 0 && <HomeTabScreen navigation={this.props.navigation} />}
                    {this.state.tabIndex === 1 && <FavouritesTabScreen navigation={this.props.navigation} />}
                    {this.state.tabIndex === 2 && <MenuTabScreen navigation={this.props.navigation} />}
                    {this.state.tabIndex === 3 && <ProductsTabScreen navigation={this.props.navigation} />}
                    {this.state.tabIndex === 4 && <ProfileTabScreen navigation={this.props.navigation} />}
                </View>

                <View style={styles.bottomTabBar}>

                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ tabIndex: 0 })}>
                        <View style={styles.tab}>
                            <TabIcons
                                iconImage={this.state.tabIndex == 0 ? AppImages.home : AppImages.home}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ tabIndex: 1 })}>
                        <View style={styles.tab}>
                            <TabIcons
                                iconImage={this.state.tabIndex == 1 ? AppImages.favourite : AppImages.favourite}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ tabIndex: 2 })}>
                        <View style={styles.tab}>
                            <TabIcons
                                iconImage={this.state.tabIndex == 2 ? AppImages.home : AppImages.home}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ tabIndex: 3 })}>
                        <View style={styles.tab}>
                            <TabIcons
                                iconImage={this.state.tabIndex == 3 ? AppImages.home : AppImages.home}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ tabIndex: 4 })}>
                        <View style={styles.tab}>
                            <TabIcons
                                iconImage={this.state.tabIndex == 4 ? AppImages.home : AppImages.home}
                            />
                        </View>
                    </TouchableWithoutFeedback>

                </View>

            </View>
        );
    }

}
