import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

describe('renders without crashing', () => {
  it('commponent <App/>', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
