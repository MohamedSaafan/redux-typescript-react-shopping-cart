import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { CartActions } from "../actions/cart";
import { ProductsActions } from "../actions/products";
import { RootStateType } from "../reducers";

type getState = () => RootStateType;

export const fetchPorducts = () => async (
  dispatch: Dispatch<ProductsActions>
) => {
  dispatch({ type: ActionTypes.PRODUCTS_LOADING });

  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: ActionTypes.PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};

export const AddItemToCart = (
  id: number,
  price: number,
  image: string,
  title: string
) => (dispatch: Dispatch<CartActions>, getState: getState) => {
  const state = getState();
  const existedItem = state.cart.items.find((item) => item.id === id);
  if (existedItem) {
    return dispatch({
      type: ActionTypes.DECREASE_NUMBER_OF_ITEMS_IN_CART,
      payload: {
        id,
        price,
      },
    });
  }
  dispatch({
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { id, price, image, title },
  });
};

export const RemoveItemFromCart = (id: number, price: number) => (
  dispatch: Dispatch<CartActions>
) => {
  dispatch({
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      id,
      price,
    },
  });
};

export const IncreaseNumberOfItemsByOne = (id: number, price: number) => (
  dispatch: Dispatch<CartActions>
) => {
  dispatch({
    type: ActionTypes.INCREASE_NUMBER_OF_ITEMS_IN_CART,
    payload: {
      id,
      price,
    },
  });
};
export const DecreaseNumberOfItemsByOne = (id: number, price: number) => (
  dispatch: Dispatch<CartActions>
) => {
  dispatch({
    type: ActionTypes.DECREASE_NUMBER_OF_ITEMS_IN_CART,
    payload: {
      id,
      price,
    },
  });
};
