import {REGISTER} from '../constant';
export default function(state = {userdata: ''}, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        userdata: action.payload,
      };
    default:
      return state;
  }
}
