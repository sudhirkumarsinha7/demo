import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from '../../components/Scale';
import {connect} from 'react-redux';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent',
  },
  lottie: {
    width: scale(100),
    height: scale(100),
  },
});
function mapStateToProps(state) {
  return {
    user: state.userinfo.user,
    loder: state.loder,
  };
}

export default connect(
  mapStateToProps,
  {},
)(Home);
