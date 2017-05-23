import React from 'react';
import ReactDOM from 'react-dom';
import LoggedOutPage from './pages/loggedOutPage';

// if using redux for state management:
// import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import Style from './stylesheets/main.scss';

const el = document.getElementById('app');

export default ReactDOM.render(<LoggedOutPage />, el);
