import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/APP";
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'

const ComposeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store=createStore(rootReducer,ComposeEnhancers(applyMiddleware(thunkMiddleware)))


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById("root"));
