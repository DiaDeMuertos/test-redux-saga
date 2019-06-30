import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import Creators from './actionCreator';

const Counter = ({ counter, onIncrement, onDecrement, onIncrementAsync }) => {
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
      <button onClick={onIncrement}>Increment</button>{' '}
      <button onClick={onDecrement}>Decrement</button>
      <hr />
      <div>Clicked: {counter.value} times</div>
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = () => ({
  onIncrement: () => action(Creators.increment()),
  onDecrement: () => action(Creators.decrement()),
  onIncrementAsync: () => action(Creators.incrementAsync({ data: 'OK!' })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
