import { createReducer, Types as ReduxSauceTypes } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import Types from './actionTypes';

console.log(Types);

const INITIAL_STATE = Immutable({ counter: { value: 0 } });

export const increment = (state = INITIAL_STATE, action) => {
  const { counter } = state;
  const { value } = counter;
  return state.merge({ counter: { value: value + 1 } });
};

export const incrementIfOdd = (state = INITIAL_STATE, action) => {
  const { counter } = state;
  const { value } = counter;
  return state.merge({ counter: { value: value + 1 } });
};

export const decrement = (state = INITIAL_STATE, action) => {
  const { counter } = state;
  const { value } = counter;
  return state.merge({ counter: { value: value - 1 } });
};

export const defaultHandler = (state = INITIAL_STATE, action) => {
  const { counter } = state;
  const { value } = counter;

  return value % 2 !== 0
    ? state.merge({ counter: { value: value + 1 } })
    : state;
};

export const HANDLERS = {
  [Types.INCREMENT]: increment,
  [Types.INCREMENT_IF_ODD]: incrementIfOdd,
  [Types.DECREMENT]: decrement,
  [ReduxSauceTypes.DEFAULT]: defaultHandler,
};

export default createReducer(INITIAL_STATE, HANDLERS);
