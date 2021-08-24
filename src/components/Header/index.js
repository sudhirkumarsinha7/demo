import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  BackHandler,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {scale, moderateScale, verticalScale} from '../Scale';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonStyle, Colors} from '../Common/Style';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#0093E9', '#36C2CF']}
        style={{
          width: Dimensions.get('window').width,
          height: scale(150),
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}>
        <View
          style={{
            marginTop: verticalScale(20),
            marginLeft: scale(16),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
         <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{width: 50}}>
            <Icon name="angle-left" size={50} color={Colors.black70} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: scale(23),
              fontSize: scale(24),
              fontFamily: 'Roboto-Bold',
              color: '#FFFFFF',
              width: this.props.scan ? '65%' : '80%',
              fontWeight: 'bold',
            }}>
            {this.props.name}
          </Text>
          {this.props.scan ? (
            <TouchableOpacity
              // style={{backgroundColor:'white'}}
              onPress={this.props.onPress}>
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  alignSelf: 'center',
                }}
                source={require('../../assets/qr-code.png')}
                resizeMode="contain"
              />
              {/* <Icon2 name="scan1" color="white" size={25} /> */}
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Notifications')}
            style={{
              justifyContent: 'flex-end',
              right: 20,
              position: 'absolute',
            }}>
            <Image
              style={{width: scale(13.5), height: scale(15)}}
              source={require('../../assets/Bell.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

export class HeaderWithBack extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let {isfilter = false} = this.props;
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: scale(100),
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}>
        <View
          style={{
            // marginTop: verticalScale(20),
            marginLeft: scale(16),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <HamburgerIcon /> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{width: 50}}>
            <Icon name="angle-left" size={50} color={Colors.black70} />
          </TouchableOpacity>
          <Text
            style={{
              // marginLeft: scale(23),
              fontSize: scale(24),
              fontFamily: 'Roboto-Bold',
              width: this.props.scan ? '65%' : isfilter ? '53%' : '80%',
              fontWeight: 'bold',
              color: Colors.black0,
            }}>
            {this.props.name}
          </Text>
          {this.props.scan ? (
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={this.props.onPress}>
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  alignSelf: 'center',
                }}
                source={require('../../assets/qr-code.png')}
                resizeMode="contain"
              />
              {/* <Icon2 name="scan1" color="white" size={25} /> */}
            </TouchableOpacity>
          ) : null}
          {isfilter ? (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignContent: 'center',
              }}
              onPress={this.props.onPress}>
              <Text
                style={{
                  fontSize: scale(14),
                  fontFamily: 'Roboto-regular',
                  color: Colors.black0,
                  alignSelf: 'center'
                }}>
                {' '}
                Clear filters{' '}
              </Text>
              {/* <Icon1
                  name="delete-circle-outline"
                  size={35}
                /> */}
              <Image
                style={{width: scale(13.5), height: scale(35)}}
                source={require('../../assets/deletegrey.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                justifyContent: 'flex-end',
                right: 16,
                position: 'absolute',
              }}>
              <Image
                style={{width: scale(13.5), height: scale(15)}}
                source={require('../../assets/Bell.png')}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}
export class HeaderWithBackShipmentScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let {isfilter = false} = this.props;
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#0093E9', '#36C2CF']}
        style={{
          width: Dimensions.get('window').width,
          height: scale(150),
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}>
        <View
          style={{
            marginTop: verticalScale(20),
            marginLeft: scale(16),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home_Shipment')}
            style={{width: 50}}>
            <Icon name="angle-left" color="white" size={50} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(24),
              fontFamily: 'Roboto-Bold',
              color: '#FFFFFF',
              width: this.props.scan ? '65%' : isfilter ? '45%' : '80%',
              fontWeight: 'bold',
            }}>
            {this.props.name}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
export class ScannerHeaderBack extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#0093E9', '#36C2CF']}
        style={{
          width: Dimensions.get('window').width,
          // height: scale(180),
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          marginBottom: 2,
        }}>
        <View
          style={{
            marginTop: verticalScale(30),
            marginLeft: scale(16),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <HamburgerIcon /> */}
          <TouchableOpacity onPress={() => this.props.back}>
            <Icon name="angle-left" color="white" size={50} />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: scale(23),
              fontSize: scale(24),
              fontFamily: 'Roboto-Bold',
              color: '#FFFFFF',
              width: this.props.scan ? '65%' : '80%',
              fontWeight: 'bold',
            }}>
            {this.props.name}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
export class HeaderWithBackBlue extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let {isfilter = false} = this.props;
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#0093E9', '#36C2CF']}
        style={{
          width: Dimensions.get('window').width,
          height: scale(100),
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}>
        <View
          style={{
            // marginTop: verticalScale(20),
            marginLeft: scale(16),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <HamburgerIcon /> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{width: 50}}>
            <Icon name="angle-left" color="white" size={50} />
          </TouchableOpacity>
          <Text
            style={{
              // marginLeft: scale(23),
              fontSize: scale(24),
              fontFamily: 'Roboto-Bold',
              color: '#FFFFFF',
              width: this.props.scan ? '65%' : isfilter ? '45%' : '80%',
              fontWeight: 'bold',
            }}>
            {this.props.name}
          </Text>
          {this.props.scan ? (
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={this.props.onPress}>
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  alignSelf: 'center',
                }}
                source={require('../../assets/qr-code.png')}
                resizeMode="contain"
              />
              {/* <Icon2 name="scan1" color="white" size={25} /> */}
            </TouchableOpacity>
          ) : null}
          {isfilter ? (
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={this.props.onPress}>
              <Text
                style={{
                  fontSize: scale(16),
                  fontFamily: 'Roboto-Bold',
                  color: '#FFFFFF',
                }}>
                {' '}
                Clear Filter{' '}
              </Text>
              <Icon1 name="delete-circle-outline" color="#FFFFFF" size={35} />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                justifyContent: 'flex-end',
                right: 16,
                position: 'absolute',
              }}>
              {/* <Image
                style={{width: scale(13.5), height: scale(15)}}
                source={require('../../assets/Bell.png')}
                resizeMode="contain"
              /> */}
            </View>
          )}
        </View>
      </LinearGradient>
    );
  }
}
