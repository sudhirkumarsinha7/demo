import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {scale, moderateScale, verticalScale} from '../Scale';
import {CommonStyle, Colors} from './Style';
import {Dropdown} from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import _ from 'lodash';
import DropDownPicker from 'react-native-dropdown-picker';


const DeviceHeight = Dimensions.get('window').height;
const DeviceWidth = Dimensions.get('window').width;


class InputTextHelper extends Component {
  render() {
    const {eachRow, state, updateState, edit = true, image = ''} = this.props;
    return (
      <View style={{...CommonStyle.dropdownView}}>
        {image ? (
          <Image
            style={{
              width: scale(15),
              height: scale(15),
              margin: 5,
              marginLeft: -10,
            }}
            source={image}
            resizeMode="contain"
          />
        ) : null}
        <View
          style={{
            ...CommonStyle.dropdownleftView,
            width: image ? '40%' : '50%',
          }}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'Roboto-Regular',
            }}>
            {eachRow.displayName}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: '#E8E8E8',
            width: '50%',
          }}>
          <TextInput
            style={{
              borderBottomWidth: edit ? 1 : 0,
              borderBottomColor: '#E8E8E8',
            }}
            placeholder={'Enter ' + eachRow.displayName}
            keyboardType={eachRow.keyboardType}
            value={
              state[eachRow.stateName]
                ? state[eachRow.stateName] + ''
                : state[eachRow.stateName]
            }
            onChangeText={text => updateState({[eachRow.stateName]: text})}
            editable={edit}
            multiline={true}
          />
        </View>
      </View>
    );
  }
}

class InputTextHelper1 extends Component {
  render() {
    const {eachRow, state, updateState, edit = true} = this.props;
    return (
      <View
        style={{
          margin: verticalScale(5),
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontWeight: 'bold',
            color: Colors.black0,
          }}>
          {eachRow.displayName}
        </Text>
        <View
          style={{
            width: '100%',
            borderBottomColor: '#E8E8E8',
          }}>
          <TextInput
            style={{
              borderBottomWidth: edit ? 1 : 0,
              borderBottomColor: '#E8E8E8',
            }}
            placeholder={'Enter ' + eachRow.displayName}
            keyboardType={eachRow.keyboardType}
            value={
              state[eachRow.stateName]
                ? state[eachRow.stateName] + ''
                : state[eachRow.stateName]
            }
            onChangeText={text => updateState({[eachRow.stateName]: text})}
            editable={edit}
            multiline={true}
          />
        </View>
      </View>
    );
  }
}
class CustomTextView extends Component {
  render() {
    const {leftText, rightText} = this.props;
    return (
      <View style={{...CommonStyle.dropdownView}}>
        <View style={{...CommonStyle.dropdownleftView}}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              color: Colors.black70,
              fontSize: scale(12),
            }}>
            {leftText}
          </Text>
        </View>
        <View
          style={{
            width: '50%',
            borderBottomColor: '#E8E8E8',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: scale(12),
              // fontWeight: 'bold',
              color: '#000000',
            }}
            numberOfLines={3}
            ellipsizeMode={'tail'}>
            {rightText ? rightText + '' : ''}
          </Text>
        </View>
      </View>
    );
  }
}


class CustomDropDown extends Component {
  render() {
    const {
      eachRow,
      state,
      updateState,
      dropDowndata,
      label = '',
      mapKey = '',
    } = this.props;
    console.log('dropdowndata 1234' + JSON.stringify(dropDowndata));
    // console.log('dropdowndata label' + label);
    // console.log('dropdowndata mapKey' + mapKey);

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <View style={{...CommonStyle.dropdownleftView}}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'Roboto-Regular',
            }}>
            {eachRow.displayName}
          </Text>
        </View>
        <Dropdown
          label={state[eachRow.stateName] ? '' : 'Select'}
          containerStyle={{width: '50%'}}
          data={dropDowndata}
          onChangeText={val => {
            updateState({[eachRow.stateName]: val});
          }}
          value={state[eachRow.stateName]}
          labelExtractor={item => (label ? item[label] : item)}
          valueExtractor={item => (mapKey ? item[mapKey] : item)}
          // renderAccessory={DropdownIcon}
          dropdownOffset={{top: 5, left: 0}}
        />
      </View>
    );
  }
}


class CustomeDatePicker extends Component {
  render() {
    const {
      eachRow,
      state,
      updateState,
      edit = true,
      minDate = '',
      image = '',
    } = this.props;
    return (
      <View style={{...CommonStyle.dropdownView}}>
        {image ? (
          <Image
            style={{width: scale(15), height: scale(20), margin: 5}}
            source={image}
            resizeMode="contain"
          />
        ) : null}
        <View
          style={{
            ...CommonStyle.dropdownleftView,
            width: image ? '40%' : '50%',
          }}>
          <Text style={{color: '#707070'}}>{eachRow.displayName}</Text>
        </View>
        <View
          style={{
            width: '50%',
            height: scale(35),
            borderBottomColor: '#E8E8E8',
            borderBottomWidth: 1,
          }}>
          <DatePicker
            style={{
              height: scale(35),
              width: '95%',
            }}
            date={state[eachRow.stateName]} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="DD/MM/YYYY"
            placeHolderTextStyle={{
              color: '#707070',
              fontSize: scale(15),
            }}
            format="DD/MM/YYYY"
            minDate={minDate ? minDate : new Date()}
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={
              <Image
                style={{width: scale(14.04), height: scale(14.04)}}
                source={require('../../assets/calendar.png')}
                resizeMode="contain"
              />
            }
            customStyles={{
              dateInput: {
                borderWidth: 0,
                fontSize: scale(15),
                height: scale(50),
                width: '100%',
                alignItems: 'flex-start',
              },
            }}
            onDateChange={date => {
              updateState({[eachRow.stateName]: date});
            }}
          />
        </View>
      </View>
    );
  }
}
export class CustomeDatePicker1 extends Component {
  render() {
    const {
      eachRow,
      state,
      updateState,
      edit = true,
      minDate = '',
      image = '',
    } = this.props;
    return (
      <View
        style={{
          marginBottom: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {image ? (
            <Image
              style={{width: scale(15), height: scale(15), margin: 5}}
              source={image}
              resizeMode="contain"
            />
          ) : null}
          <View
            style={{
              ...CommonStyle.dropdownleftView,
              // width: image ? '40%' : '50%',
            }}>
            <Text
              style={{
                color: '#707070',
                fontFamily: 'Roboto-Regular',
              }}>
              {eachRow.displayName}
            </Text>
          </View>
        </View>
        <View style={{width: '100%', marginLeft: 10}}>
          <DatePicker
            style={{
              height: scale(35),
              width: '95%',
            }}
            date={state[eachRow.stateName]} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="DD/MM/YYYY"
            placeHolderTextStyle={{
              color: '#707070',
              fontSize: scale(15),
            }}
            format="DD/MM/YYYY"
            minDate={minDate ? minDate : new Date()}
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={
              <Image
                style={{width: scale(14.04), height: scale(14.04)}}
                source={require('../../assets/calendar.png')}
                resizeMode="contain"
              />
            }
            customStyles={{
              dateInput: {
                borderWidth: 0,
                fontSize: scale(15),
                height: scale(50),
                width: '100%',
                alignItems: 'flex-start',
              },
            }}
            onDateChange={date => {
              updateState({[eachRow.stateName]: date});
            }}
          />
        </View>
      </View>
    );
  }
}


class InputDisableHelper extends Component {
  render() {
    const {leftText, rightText} = this.props;
    return (
      <View style={{...CommonStyle.dropdownView}}>
        <View style={{...CommonStyle.dropdownleftView}}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'Roboto-Regular',
            }}>
            {leftText}
          </Text>
        </View>
        <View
          style={{
            width: '50%',
            borderBottomColor: '#E8E8E8',
          }}>
          {/* <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#E8E8E8',
                color: 'black',
              }}
              placeholder={'Enter ' + leftText}
              value={rightText}
              editable={false}
            /> */}
          {rightText ? (
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#E8E8E8',
                color: 'black',
              }}
              numberOfLines={3}
              ellipsizeMode={'tail'}>
              {rightText}
            </Text>
          ) : (
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#E8E8E8',
                color: 'black',
              }}
              placeholder={'Enter ' + leftText}
              value={rightText}
              editable={false}
            />
          )}
        </View>
      </View>
    );
  }
}

class CustomDropDownHelper extends Component {
  render() {
    const {
      eachRow,
      state,
      updateState,
      // dropDowndata,
      // label = '',
      image = '',
      modelKey,
    } = this.props;
    // console.log('dropdowndata 1234' + JSON.stringify(dropDowndata));
    console.log('dropdowndata modelKey 123  ' + modelKey);
    // console.log('dropdowndata mapKey' + mapKey);

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 8,
        }}>
        {image ? (
          <Image
            style={{width: scale(15), height: scale(20), margin: 5}}
            source={image}
            resizeMode="contain"
          />
        ) : null}
        <View
          style={{
            ...CommonStyle.dropdownleftView,
            width: image ? '40%' : '50%',
          }}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'Roboto-Regular',
            }}>
            {eachRow.displayName}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '50%',
            borderBottomWidth: 1,
            borderBottomColor: '#E8E8E8',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={() => updateState({[modelKey]: !state[modelKey]})}>
          {state[eachRow.stateName] ? (
            <Text
              style={{
                width: '85%',
                color: '#000',
              }}>
              {state[eachRow.stateName]}
            </Text>
          ) : (
            <Text
              style={{
                width: '85%',
                color: '#707070',
              }}>
              {'Select ' + eachRow.displayName}
            </Text>
          )}
          <Image
            style={{width: scale(10.2), height: scale(14.09)}}
            source={require('../../assets/updown.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export class CustomDropDownHelper1 extends Component {
  render() {
    const {
      eachRow,
      state,
      dropDowndata,
      label = '',
      image = '',
      mapKey = '',
      search = true,
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 8,
        }}>
        {image ? (
          <Image
            style={{width: scale(15), height: scale(15), margin: 5}}
            source={image}
            resizeMode="contain"
          />
        ) : null}
        <View
          style={{
            ...CommonStyle.dropdownleftView,
            width: image ? '25%' : '35%',
          }}>
          <Text
            style={{
              color: '#707070',
              fontFamily: 'Roboto-Regular',
            }}>
            {eachRow.displayName}
          </Text>
        </View>
        <View style={{width: '65%'}}>
          <DropDownPicker
            items={dropDowndata.map(eachElement => {
              return {
                value: eachElement[mapKey] || eachElement,
                label: eachElement[label] || eachElement[mapKey] || eachElement,
              };
            })}
            containerStyle={{height: 40}}
            // style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            defaultValue={state[eachRow.stateName] || null}
            placeholder={''}
            scrollViewProps={{
              decelerationRate: 'fast',
            }}
            onChangeItem={val => this.props.onChangeValue(val)}
            searchable={search}
          />
        </View>
      </View>
    );
  }
}



export {
  InputTextHelper,
  CustomTextView,
  CustomDropDown,
  CustomeDatePicker,
  InputDisableHelper,
  CustomDropDownHelper,
  InputTextHelper1,
};
