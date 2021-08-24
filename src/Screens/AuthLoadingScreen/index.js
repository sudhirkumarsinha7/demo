import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../../utils/setAuthToken';

class AuthLoadingScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this._loadData();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        {/* <Spinner size={50} type={'ThreeBounce'} color={'#5DC4DD'} style={{ alignItems: 'center', flex: 1, justifyContent: 'center',}} /> */}
        <StatusBar barStyle="default" />
      </View>
    );
  }
  _loadData = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('auth_tokenn', token);
    if (token) {
      const decoded = jwt_decode(token);
      console.log('decode', decoded);
      const currenTime = Date.now() / 1000;
      if (decoded.exp < currenTime) {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      } else {
        setAuthToken(token);
        this.props.navigation.navigate('App');
      }
    } else {
      this.props.navigation.navigate('Auth');
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default AuthLoadingScreen;
