interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  quantity: number;
}

interface IAction {
  type: JobActions;
  payload: IProduct;
}
interface IDispatch {
  (action: IAction): void;
}

type IReducer = Reducer<IProduct[], IAction>;

interface IState {
  cartList: IProduct[];
  cartCount: number;
  totalPrice: number;
}
