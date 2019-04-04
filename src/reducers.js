import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import Types from './actionTypes';

console.log(Types);

const INITIAL_STATE = Immutable(0);

export const increment = (state = INITIAL_STATE, action) => {
  return state + 1;
};

export const incrementIfOdd = (state = INITIAL_STATE, action) => {
  return state + 1;
};

export const decrement = (state = INITIAL_STATE, action) => {
  return state - 1;
};

export const defaultHandler = (state = INITIAL_STATE, action) => {
  return state % 2 !== 0 ? state + 1 : state;
};

export const HANDLERS = {
  [Types.INCREMENT]: increment,
  [Types.INCREMENT_IF_ODD]: incrementIfOdd,
  [Types.DECREMENT]: decrement,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
};

export default createReducer(INITIAL_STATE, HANDLERS);
