import {REGISTER, OTP, LOGIN, USER_TOKEN} from '../constant';
import {loadingOn, loadingOff} from './loader';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {config} from '../config';
import setAuthToken from '../utils/setAuthToken';

export const saveUser = (userdata, callback = () => {}) => async (
  dispatch,
  getState,
) => {
  loadingOn(dispatch);
  try {
    // console.log(
    //   'Action_user_saveUser_registerUrl123' +
    //     JSON.stringify(config().registerUrl),
    // );
    if (!userdata.mob) {
      delete userdata.phoneNumber;
    } else {
      userdata.phoneNumber = userdata.phoneNumber.slice(1);
    }
    // if (userdata.address && userdata.address.organisationName) {
    //   delete userdata.address.organisationName;
    // }
    console.log('Action_user_saveUser_userdata' + JSON.stringify(userdata));
    // let response = {};
    const response = await axios.post(config().registerUrl, userdata);
    console.log('Action_user_saveUser_response' + JSON.stringify(response));

    // const response = await axios.post(`${url}/usermanagement/api/auth/register`, userdata);
    if (response.data.message === 'Registration Success.') {
      callback();
    }
    return response;
  } catch (e) {
    //   console.log("Action_saveUser_error", e.response);
    // console.log('Action_saveUser error  ' + JSON.stringify(e.response));

    const err = e.response.data.data[0];
    return e.response;
    // if (err.msg === 'E-mail already in use'||) {
    //   return e.response;
    // } else {
    //   return e;
    // }
  } finally {
    loadingOff(dispatch);
  }
};

export const sendOtp = (data, callback = () => {}) => async (
  dispatch,
  getState,
) => {
  loadingOn(dispatch);
  try {
    console.log('Action_user_update_data' + JSON.stringify(data));
    // alert(config().sendOtpUrl);
    let response = await axios.post(config().sendOtpUrl, data);
    console.log('Action_user_update_response' + JSON.stringify(response));
    return response;
  } catch (e) {
    console.log('e', e);
    alert(e.response);
    return e.response;
  } finally {
    loadingOff(dispatch);
  }
};

export const verify_otp = (otpdata, callback = () => {}) => async (
  dispatch,
  getState,
) => {
  loadingOn(dispatch);
  dispatch({
    type: OTP,
    payload: otpdata,
  });
  try {
    const response = await axios.post(config().verifyOtpUrl, otpdata);
    await AsyncStorage.setItem('logged', '1');
    await AsyncStorage.setItem('token', response?.data?.data?.token);
    setAuthToken(response?.data?.data?.token);
    dispatch({
      type: USER_TOKEN,
      payload: response?.data?.data?.token,
    });
    //const response = await axios.post(`${url}/usermanagement/api/auth/verify-otp`, otpdata);
    console.log('Action_verify_otp_response', response);
    return response;
  } catch (e) {
    console.log('Action_verify_otp_error', e.response);
    //alert(e);
    return e.response;
  } finally {
    loadingOff(dispatch);
  }
};

export const resend_otp = (otpdata, callback = () => {}) => async (
  dispatch,
  getState,
) => {
  loadingOn(dispatch);
  // dispatch({
  //     type: OTP,
  //     payload: otpdata
  // })
  try {
    const response = await axios.post(
      `${url}/usermanagement/api/auth/resend-verify-otp`,
      otpdata,
    );
    console.log('Action_resend_otp_response', response);
    if (response.data.message === 'Confirm otp sent.') {
      alert('Resend OTP Sent Successfully');
    }
    return response;
  } catch (e) {
    console.log('Action_resend_otp_error', e.response);
    alert(e);
  } finally {
    loadingOff(dispatch);
  }
};

export const login = (logindata, rem, callback = () => {}) => async (
  dispatch,
  getState,
) => {
  loadingOn(dispatch);
  dispatch({
    type: LOGIN,
    payload: rem,
  });

  try {
    console.log(config().loginUrl, logindata, getState().login.rem);

    const response = await axios.post(config().loginUrl, logindata);

    // console.log('Action_login_response'+JSON.stringify(response));
    if (response.data.message === 'Login Success.') {
      callback();
      if (getState().login.rem) {
        console.log('true', getState().login.rem);
        await AsyncStorage.setItem('logged', '1');
        await AsyncStorage.setItem('token', response.data.data.token);
        setAuthToken(response.data.data.token);

        dispatch({
          type: LOGIN,
          payload: response.data.data.token,
        });
      } else {
        console.log('false', getState().login.rem);
        setAuthToken(response.data.data.token);

        dispatch({
          type: LOGIN,
          payload: response.data.data.token,
        });
      }
    }
    return response;
  } catch (e) {
    // console.log('Action_login_error', e);
    // console.log('Action_login_error', e.response);
    const err = e.response.data.message;
    if (err === 'Email or Password wrong.') {
      return e.response;
    } else {
      return e;
    }
  } finally {
    loadingOff(dispatch);
  }
};

export const upload_Image = (image, imageredux, callback = () => {}) => async (
  dispatch,
  getState,
) => {
  loadingOn(dispatch);
  try {
    let response;
    const configs = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    console.log(
      'Action_upload_ImagesUrl ' + JSON.stringify(`${config().upload}`),
    );
    console.log('Action_upload_Image ', image);
    response = await axios.post(config().upload, image, configs);
    // response = await axios.post(`${url}/usermanagement/api/auth/upload`, image, configs);
    if (response.data.message === 'Updated') {
      alert('Image successfully updated');
      // dispatch({
      //   type: USERUPDATE,
      //   payload: {profile_picture: imageredux},
      // });
    }
    console.log('Action_upload_Image_response' + JSON.stringify(response));
    return response;
  } catch (e) {
    console.log('Action_upload_Image_error' + JSON.stringify(e.response));
    alert(e);
  } finally {
    loadingOff(dispatch);
  }
};
