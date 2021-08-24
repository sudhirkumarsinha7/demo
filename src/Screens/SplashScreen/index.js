import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  Animated,
} from 'react-native';
import {scale, moderateScale, verticalScale} from '../../components/Scale';
import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../../utils/setAuthToken';
import VersionNumber from 'react-native-version-number';

class ImageLoader extends React.PureComponent {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

class SplashScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    setTimeout(() => {
      this.props.navigation.navigate('AuthLoading');
    }, 5000);
  };

  render() {
    return (
      // <ImageBackground
      //   style={styles.imgBackground}
      //   resizeMode="cover"
      //   source={require('../../assets/Splash_Background.png')}>
      <View>
        <StatusBar hidden />

        <View style={styles.container}>

          <View style={{alignItems: 'center', marginBottom: '10%'}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: scale(14),
                  color: '#707070',
                  fontFamily: 'Roboto-Regular',
                }}>
                Powered By Code Connex
              </Text>
            </View>
            <Text
              style={{
                color: '#707070',
                fontSize: scale(14),
                fontFamily: 'Roboto-Regular',
                marginTop: verticalScale(8),
              }}>
              Version {VersionNumber.appVersion}
            </Text>
          </View>
        </View>
        </View>
      // </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default SplashScreen;
