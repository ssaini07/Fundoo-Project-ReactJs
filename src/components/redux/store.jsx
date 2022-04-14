import { createStore, applyMiddleware, combineReducers } from 'redux';
import {drawerReducer} from './drawerReducer'

const reducer = combineReducers({
	drawerReducer: drawerReducer,
	
});

const store = createStore(reducer)

export default store;