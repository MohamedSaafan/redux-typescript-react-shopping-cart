import { ActionTypes } from "../action-types";
export interface ICartItem {
  id: number;
  numberOfItems: number;
  image: string;
  title: string;
  price: number;
}

interface IAddCartItem {
  type: ActionTypes.ADD_ITEM_TO_CART;
  payload: {
    id: number;
    price: number;
    image: string;
    title: string;
  };
}

interface IRemoveCartItem {
  type: ActionTypes.REMOVE_CART_ITEM;
  payload: {
    id: number;
    price: number;
  };
}

interface IDecreaseNumOfItem {
  type: ActionTypes.DECREASE_NUMBER_OF_ITEMS_IN_CART;
  payload: {
    id: number;
    price: number;
  };
}
interface IIncreaseNumOfItem {
  type: ActionTypes.INCREASE_NUMBER_OF_ITEMS_IN_CART;
  payload: {
    id: number;
    price: number;
  };
}

export type CartActions =
  | IAddCartItem
  | IDecreaseNumOfItem
  | IRemoveCartItem
  | IIncreaseNumOfItem;
