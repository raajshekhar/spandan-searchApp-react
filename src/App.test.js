import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import suggestionData from './reducers/suggestionData';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    suggestions: suggestionData
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); 


it('renders without crashing', () => {
  const div = document.createElement('div');
  const body = document.getElementsByTagName("body")[0]
  div.setAttribute("id", "root");
  body.append(div);
  ReactDOM.render(<Provider store={store}>
    <App />
        </Provider>, document.getElementById('root'));
  ReactDOM.unmountComponentAtNode(div);
});
