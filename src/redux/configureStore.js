// when creating a store it's useful to define a function that configures the store because we'll call this function in our entry point.
// this way the store gets configured when the app starts.

import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'

// middleware setup in order to be able to interact with redux store in dev tools
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
	
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
	)
}
