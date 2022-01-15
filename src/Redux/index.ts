
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { CartReducer } from './Cart/cart.reducer'
import { ThemeReducer } from './Theme/theme.reducer'
import { TypeTheme } from './Theme/theme.type'


const middleware = [thunk]
let  enhancer=composeWithDevTools(applyMiddleware(...middleware));
if(process.env.NODE_ENV === 'production'){
    enhancer=applyMiddleware(...middleware)

}

const reducers = combineReducers({

     cart: CartReducer,
     theme:ThemeReducer,
     
   
})







const Store = createStore(
     reducers,
enhancer
)
export type AppDispatch = typeof Store.dispatch
export type AppState = ReturnType<typeof reducers>


declare const Window: any

Window.store = Store
export default Store







