import {combineReducers} from 'redux';
import register from './register.reducer';
import otp from './otp.reducer';
import login from './login.reducer';
import userinfo from './userinfo.reducer';
import loder from './loder.reducer';

export default combineReducers({
  register,
  otp,
  login,
  userinfo,
  loder,
});
