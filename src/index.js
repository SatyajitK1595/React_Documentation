import React from 'react';
import { render } from "react-dom";
import App from '../src/components/app';
import 'reactstrap';

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<App />, rootElement);
}
