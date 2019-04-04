import { createActions } from 'reduxsauce';

const { Creators } = createActions({
  increment: null,
  incrementIfOdd: null,
  decrement: null,
  incrementAsync: null,
  defaultHandler: null,
});

export default Creators;
