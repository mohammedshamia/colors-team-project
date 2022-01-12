
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { CartReducer } from './Cart/cart.reducer'


const middleware = [thunk]
let  enhancer=composeWithDevTools(applyMiddleware(...middleware));
if(process.env.NODE_ENV === 'production'){
    enhancer=applyMiddleware(...middleware)

}

const reducers = combineReducers({

     cart: CartReducer,
   
})




const initialState = {
     
}




const Store = createStore(
     reducers,
     initialState,
     enhancer,
)
export type AppDispatch = typeof Store.dispatch
export type TState = ReturnType<typeof reducers>


declare const Window: any

Window.store = Store
export default Store