import {
  SHOWLODER,
  HIDELODER,
} from '../constant';
export const loadingOn = dispatch => {
  dispatch({
    type: SHOWLODER,
  });
};

export const loadingOff = dispatch => {
  dispatch({
    type: HIDELODER,
  });
};

