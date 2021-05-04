import * as c from './../actions/ActionTypes';
//c refers to constants

export default (state = false, action) => {
  switch (action.type) {
  case c.TOGGLE_FORM:
    return !state;
  default:
    return state;
  }
};