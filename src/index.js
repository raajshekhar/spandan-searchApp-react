import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import suggestionData from './store/reducers/suggestionData';
import thunk from 'redux-thunk';

/**
 * combined reducers will be used to implement different reducers for respective functionalities
 */
const reducer = combineReducers({
    suggestions: suggestionData
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); 

ReactDOM.render(
<Provider store={store}>
<App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
