import React from 'react';
import ReactDOM from 'react-dom';
import 'promise-polyfill/src/polyfill';

// styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// components import
import Page from "./components/Page";

ReactDOM.render(<Page />, document.getElementById('app'));
