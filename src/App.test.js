import * as enzyme from "enzyme";
var Adapter = require('enzyme-adapter-react-15');

enzyme.configure({ adapter: new Adapter() })


import React from 'react';
import App from './App';
import { render, shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
