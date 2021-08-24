import {OTP} from '../constant';
export default function(state = {otpdata: ''}, action) {
  switch (action.type) {
    case OTP:
      return {
        ...state,
        otpdata: action.payload,
      };
    default:
      return state;
  }
}
