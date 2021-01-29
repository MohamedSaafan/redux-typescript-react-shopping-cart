import { ActionTypes } from "../action-types";
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface ProductsErrorAction {
  type: ActionTypes.PRODUCTS_ERROR;
  payload: string;
}
interface ProductsLoadingAcion {
  type: ActionTypes.PRODUCTS_LOADING;
}
interface ProductsSuccessAction {
  type: ActionTypes.PRODUCTS_SUCCESS;
  payload: Product[];
}
export type ProductsActions =
  | ProductsErrorAction
  | ProductsLoadingAcion
  | ProductsSuccessAction;
