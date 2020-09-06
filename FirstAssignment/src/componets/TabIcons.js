import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from '../constants/AppStyles';

export default class TabIcons extends Component {

    render() {
        const { iconImage } = this.props;
        return (
            <View style={styles.tabIcons}>
                <Image
                    source={iconImage}
                    style={styles.icon}
                />
            </View>
        );
    }
};
