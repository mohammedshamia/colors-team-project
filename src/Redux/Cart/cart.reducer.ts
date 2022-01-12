import { AllActionCartType, EnumCartAction, IStateCart } from "./Cart.type"




const  initialState:IStateCart={
    loading:false,
    error:'',
    cartItem:[]
}


export const  CartReducer=(state=initialState,action:AllActionCartType):IStateCart=>{

    switch (action.type) {
        case EnumCartAction.ADD_ITEM:

             return {
                  ...state,
                  loading: true,
                  cartItem:[...state.cartItem,action.payload.item]
             }









default :return state

}
}