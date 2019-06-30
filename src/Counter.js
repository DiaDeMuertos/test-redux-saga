import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import Creators from './actionCreator';

const Counter = ({
  counter,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onReadUser,
}) => {
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
      <button onClick={onIncrement}>Increment</button>{' '}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {counter.value} times</div>
      <hr />
      <button onClick={onReadUser}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = () => ({
  onIncrement: () => action(Creators.increment()),
  onDecrement: () => action(Creators.decrement()),
  onIncrementAsync: () => action(Creators.incrementAsync()),
  onReadUser: () => action(Creators.readUser({ id: 1, name: 'JayCeeSnow' })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
