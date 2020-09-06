/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
	Platform, NativeModules, View,
	LogBox, StatusBar
} from 'react-native';

const { StatusBarManager } = NativeModules;

import AppColors from './src/constants/AppColors';
import Routes from './src/routes/Routes';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			statusBarHeight: 0
		}
	}

	componentDidMount() {
		if (Platform.OS === 'ios')
			this.getStatusBarHeight();
	}

	getStatusBarHeight = () => {
		StatusBarManager.getHeight(response => {
			this.setState({ statusBarHeight: response.height })
		});
	}

	render() {
		return (
			<View flex={1}>
				<View height={this.state.statusBarHeight}
					backgroundColor={AppColors.colorChocolate} />
				<StatusBar barStyle="light-content" backgroundColor={AppColors.colorChocolate} />
				<Routes />
			</View>
		);
	}

}

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);
