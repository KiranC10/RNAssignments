import { StyleSheet, Dimensions, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

import AppColors from './AppColors';
import AppFonts from './AppFonts';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.colorBackground
    },
    colorWhite: {
        color: AppColors.colorWhite
    },
    bottomTabBar: {
        padding: 5,
        paddingBottom: Platform.OS === 'ios' && DeviceInfo.hasNotch() ? 30 : 2,
        flexDirection: 'row',
        backgroundColor: AppColors.colorWhite,
        borderTopColor: AppColors.colorWhite,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    tab: {
        flex: 1,
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabIcons: {
        width: 24,
        height: 24,
        margin: 5,
    },
    icon: {
        width: 20,
        height: 20
    },
    smallIcon: {
        width: 10,
        height: 10,
        borderRadius: 15,
        margin: 10,
        backgroundColor: 'grey'
    },
    cartIcon: {
        position: 'absolute',
        left: 10,
        top: 10
    },
    cartBtn: {
        width: 50,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.lightChocolate,
        borderRadius: 20
    },
    dots: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 5,
    },
    headerSearchView: {
        height: 40,
        width: width * 0.8,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: AppColors.colorLightGrey,
    },
    headerText: {
        color: AppColors.colorWhite,
        fontFamily: AppFonts.italicFonts,
        fontSize: 50,
    },
    buyNowBtn: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'white',
        width: 100,
        height: 30,
        alignSelf: 'center',
        marginTop: 10
    },
    itemView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.15,
        width: width * 0.65,
        backgroundColor: 'white',
        borderRadius: 10
    },
    itemName: {
        textAlign: 'left',
        marginLeft: 10,
        width: width * 0.45,
        fontWeight: 'bold',
        fontSize: 14,
        color: AppColors.colorDarkText,
        alignItems: 'center',
    },
    priceView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width * 0.5,
        alignItems: 'flex-end'
    },
    iconShoes: {
        zIndex: 10,
        width: 80,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    favIcon: {
        zIndex: 10,
        width: 25,
        height: 25,
    },
    itemStatus: {
        textAlign: 'center',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 12,
        color: AppColors.colorWhite,
        width: 70,
        borderWidth: 1,
        borderRadius: 5,
        margin: 8
    }
});

export default styles;