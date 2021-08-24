import {USERINFO, USERUPDATE, USER_TOKEN} from '../constant';
export default function(state = {user: {}, token: ''}, action) {
  switch (action.type) {
    case USERINFO:
      return {
        ...state,
        user: action.payload,
      };
    case USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case USERUPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
