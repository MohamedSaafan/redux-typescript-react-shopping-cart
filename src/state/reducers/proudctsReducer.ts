import { Product, ProductsActions } from "../actions/products";
import { ActionTypes } from "../action-types";

interface ProductsStateType {
  error: string | null;
  loading: boolean;
  data: Product[];
}

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const productsReducer = (
  state: ProductsStateType = initialState,
  action: ProductsActions
): ProductsStateType => {
  switch (action.type) {
    case ActionTypes.PRODUCTS_LOADING:
      return { loading: true, error: null, data: [] };
    case ActionTypes.PRODUCTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionTypes.PRODUCTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    default:
      return state;
  }
};
