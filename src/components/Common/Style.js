import {scale, moderateScale, verticalScale} from '../Scale';
// @flow
import {Dimensions, Platform, StyleSheet} from 'react-native';
export const {width} = Dimensions.get('window');
export const Colors = {
  appRed: 'red',
  pink: '#FFE0E0',
  blueButton: '#4864EA',
  appYellow: 'yellow',
  offWhite: 'rgb(239,239,239)',
  greyE8: '#E5E8E8',
  grey4F: '#4F4F4F',
  grayF5: '#F5F5F5', //ketki
  black0: '#000000', //ketki
  black70: '#707070', //ketki
  black4f: '#4F4F4F',
  blueTheme: '#0172E6',
  blueF0: '#89D1F0', //ketki
  blueEA: '#0159EA', //ketki
  blueE9: '#0093E9', //ketki
  blueFB: '#2699FB', //ketki
  blueCF: '#36C2CF', //ketki
  red23: '#FA7923', //ketki
  orange1D: '#FFAB1D', //ketki
  blueFA: '#D9F0FA', //ketki
  blue1EA: '#01CEEA', //ketki
  blueC1: '#0B65C1', //ketki
  blue87: '#084787', //ketki
  blue96: '#35BFCC96', //ketki
  blueAE: '#2BA3AE', //ketki
  whiteF6: '#F6F6F6',
  whiteF4: '#F4F4F4',
  white70: '#70707010',
  blueDE: '#87BCDE',
  whiteFF: '#FFFFFF',//ketki
  black34: '#343434',
  grey84: '#848484',
  errorColor: '#D02F33',
  greyAc: '#ACACAC',
  black36: '#363636',
  greyE2: '#E2E2E2',
  greyE5: '#E5E5E5',
  greyED: '#EDEDED',
  grey4A: '#4A4A4A',
  grey9A: '#9A9A9A',
  grey4B: '#4B4B4B',
  grayA8: '#A8A8A8',//ketki
  redD0: '#D02F33',
  whiteFa: '#FAFAFA',
  green4e: '#0D9A1E',
  green: '#3CB049',
  orange: '#FFB100',
  Blue: '#0093E9',
  red: '#FF0000',
  blueDE: '#DEEBFF',
  greyE6: '#E6E6E6',
  whiteF7: '#F7F7F7',
  whiteF2: '#F2F2F2',
  blueThemeLight: '#4B84F1',
  greyD5: '#D5D5D5',
  greyB7: '#B7B7B7',
  headerColor: '#EFF9FF',
  redFF: '#FFE0E0',
  redBe: '#BE1212',
  grey8O: '#808080',
  grey71: '#717171',
};
export const backgroundColor = [
  '#D8E5FB',
  '#D8EEFB',
  '#DFF1F2',
  '#C1E3F2',
  '#FFC18C',
  '#D4EEEC',
  '#F1DDC6',
  '#EBDDED',
  '#FFD0CA',
  '#FFEF83',
  '#FFBCC4',
  '#D9E5EF',
  '#BCFFF2',
];

const color = '#157efb';
const ICON_COLOR = Platform.OS === 'ios' ? color : '#ffffff';
export default {
  primaryColor: color,
  header: {
    backgroundColor: color,
    iconColor: ICON_COLOR,
  },
  input: {
    item: {
      borderColor: color,
      borderBottomWidth: 2,
      marginTop: 10,
    },
    label: {
      color: color,
    },
    picker: {
      ...Platform.select({
        android: {
          color: color,
        },
      }),
    },
  },
  form: {
    label: {
      color: color,
      fontSize: 15,
      includeFontPadding: false,
      marginTop: 10,
      marginBottom: 0,
      marginLeft: 15,
    },
    newlabel: {
      color: color,
      fontSize: 16,
      includeFontPadding: false,
      marginBottom: 0,
      // marginLeft: 2,
      // margin: 5,
    },
    labelUnit: {
      color: color,
      fontSize: 18,
      includeFontPadding: false,
      alignSelf: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    labelSection: {
      color: color,
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 5,
    },
    labelError: {
      color: 'red',
      fontSize: 12,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 15,
    },
    input: {
      borderColor: '#ccc',
      borderBottomWidth: 1,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
    },
    inputRightIcon: {
      color: color,
      fontSize: 32,
      marginBottom: 8,
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
    inputLeftIcon: {
      color: color,
      margin: 10,
    },
    inputError: {
      borderColor: 'red',
      borderBottomWidth: 2,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 15,
    },
  },
  centeredPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: color,
    marginTop: 25,
    width: width - 20,
  },
  pickerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: color,
    marginTop: 25,
  },
  contentModal: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonModal: {
    color: color,
    padding: 8,
  },
  inputModal: {
    borderColor: color,
    borderBottomWidth: 2,
  },
  filter: {
    content: {
      flex: 1,
      marginBottom: 10,
      marginHorizontal: 10,
    },
  },
};
