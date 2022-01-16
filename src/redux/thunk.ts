import { CartActions } from './constants';

const asyncStore = {
  getState: () => async (dispatch: any) => null,
  ADD_TODO: (newToDo: any) => async (dispatch: any) => null,
};

export default asyncStore;
