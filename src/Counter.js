import React from 'react';
import { connect } from 'react-redux';
import action from './action';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => {
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
      <button onClick={onIncrement}>Increment</button>{' '}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => action({ type: 'INCREMENT' }),
  onDecrement: () => action({ type: 'DECREMENT' }),
  onIncrementAsync: () => action({ type: 'INCREMENT_ASYNC' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
