import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

let combinedEnhancers;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
	combinedEnhancers = compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__()
	)
} else {
	combinedEnhancers = applyMiddleware(thunk);
}

const store = createStore(rootReducer, {}, combinedEnhancers);

export default store;