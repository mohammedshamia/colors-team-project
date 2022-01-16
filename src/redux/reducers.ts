import { Reducer } from 'react';
import { CartActions } from './constants';

export const CartReducer: Reducer<IReducer, IAction> = (
  state: IState = {
    cartCount: 0,
    totalPrice: 0,
    cartList: [],
  },
  action: IAction,
) => {
  switch (action.type) {
    case CartActions.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        cartCount: state.cartCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case CartActions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter(
          (item: IProduct) => item.id !== action.payload.id,
        ),
        cartCount: state.cartCount - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    case CartActions.INCREASE_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((item: IProduct) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
        cartCount: state.cartCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case CartActions.DECREASE_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((item: IProduct) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
        cartCount: state.cartCount - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    case CartActions.CLEAR_CART:
      return {
        ...state,
        cartList: [],
        cartCount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};
