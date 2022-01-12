import { Action } from 'redux'

import { IGeneralState } from './../GenralStateShape';
export enum EnumCartAction {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    RESET = 'RESET',
    INCREASE_COUNT = 'INCREASE_COUNT',
    DECREASE_COUNT = 'DECREASE_COUNT ',

}







export  interface ICartItem{

}

export  interface  IStateCart extends IGeneralState {
cartItem:ICartItem[]
}


export interface AddItem extends Action<string> {
payload:{
    item:ICartItem
}


}
export  interface IAddItemToCard{
    

}




export  type AllActionCartType=AddItem