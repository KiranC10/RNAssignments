import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DashboardTabsScreen from '../screens/dashboard/DashboardTabsScreen';

const MainNavigator = createStackNavigator({
    Dashboard: {
        screen: DashboardTabsScreen,
        navigationOptions: {
            headerShown: false
        }
    },
},
    {
        initialRouteName: 'Dashboard',
        defaultNavigationOptions: {
        }
    }
);

export default AppContainer = createAppContainer(

    createSwitchNavigator(
        {
            App: MainNavigator,
        },
        {
            initialRouteName: 'App'
        }
    )
);
