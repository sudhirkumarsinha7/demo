import {LOGIN} from '../constant';
export default function(state = {logindata: '', rem: ''}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logindata: action.payload,
        rem: action.payload,
      };
    default:
      return state;
  }
}
