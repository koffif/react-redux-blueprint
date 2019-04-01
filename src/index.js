import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../src/components/store';

import { addingUserTokenDispatch } from './components/store/actions';
import AuthComponent from './components/HigherOrderC';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(addingUserTokenDispatch(token))
}

ReactDOM.render(
    <Provider  store={store}>
        <Router>
            <Route component={App} />
            <Switch>
                <Route/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
