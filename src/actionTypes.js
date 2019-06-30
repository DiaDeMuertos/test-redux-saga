import { createTypes } from 'reduxsauce';

export default createTypes(`
  INCREMENT
  INCREMENT_IF_ODD
  DECREMENT
  INCREMENT_ASYNC
  HELLO_SAGA
  STRATEGY_REQUESTED,
  READ_USER,
`);
