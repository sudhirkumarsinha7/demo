import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {scale, moderateScale, verticalScale} from './../components/Scale';
import SplashScreen from './SplashScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Investigations from './Investigations';
import Logs from './Logs';
import Medicine from './Medicine';
import MyDoctors from './MyDoctors';
import MyPatents from './Mypatients';
const HomeScreen = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
const InvestigationsScreen = createStackNavigator(
  {
    Investigations: {
      screen: Investigations,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Investigations',
  },
);
const LogsScreen = createStackNavigator(
  {
    Logs: {
      screen: Logs,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Logs',
  },
);
const MedicineScreen = createStackNavigator(
  {
    Medicine: {
      screen: Medicine,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Medicine',
  },
);
const MyDoctorsScreen = createStackNavigator(
  {
    MyDoctors: {
      screen: MyDoctors,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'MyDoctors',
  },
);
const MyPatentsScreen = createStackNavigator(
  {
    MyPatents: {
      screen: MyPatents,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'MyPatents',
  },
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Doctor: {
      screen: MyDoctorsScreen,
    },
    Medicine: {
      screen: MedicineScreen,
    },
    Logs: {
      screen: LogsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#0093E9',
      inactiveTintColor: '#A8A8A8',
      style: {
        backgroundColor: '#FFFFFF',
        height: scale(45),
      },
    },
  },
);

const HamburgerNavigation = createDrawerNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: {
        headerShown: false,
        tabBarVisible: false,
      },
    },
  },
  {
    initialRouteName: 'BottomTabNavigator',
    contentComponent: MyPatentsScreen,
    drawerWidth: scale(250),
  },
);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Root = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    AuthLoading: AuthLoadingScreen,
    App: HamburgerNavigation,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const RegisterScreens = createSwitchNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Register',
  },
);

const RootStack = createStackNavigator(
  {
    Root: {
      screen: Root,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: RegisterScreens,
      navigationOptions: {
        headerShown: false,
      },
    },
    Drawer: {
      screen: HamburgerNavigation,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Root',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class Routes extends React.PureComponent {
  render() {
    return <AppContainer />;
  }
}
