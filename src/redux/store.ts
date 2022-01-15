import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { CartReducer } from './reducers';
// import { CartActions } from './constants';

const reducer = combineReducers<IReducer, IAction>({
  cart: CartReducer,
});

export default createStore(reducer, applyMiddleware(thunk));
