import { ActionTypes } from "../action-types";
import { ICartItem, CartActions } from "../actions/cart";
interface CartStateType {
  items: ICartItem[];
  totalPrice: number;
}
const initialState: CartStateType = {
  items: [],
  totalPrice: 0,
};
export const cartReducer = (
  state: CartStateType = initialState,
  action: CartActions
): CartStateType => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return {
        items: [
          ...state.items,
          {
            id: action.payload.id,
            numberOfItems: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          },
        ],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case ActionTypes.REMOVE_CART_ITEM:
      const existedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      const filteredArrayOfItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const remainingPriceAfterDeletion =
        state.totalPrice - existedItem?.numberOfItems! * action.payload.price;
      return {
        items: filteredArrayOfItems,
        totalPrice: remainingPriceAfterDeletion,
      };

    // case ActionTypes.DECREASE_NUMBER_OF_ITEMS_IN_CART: {
    //   const oldItem = state.items.find((item) => item.id === action.payload.id);
    //   const filteredItems = state.items.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   if (oldItem) {
    //     oldItem!.numberOfItems = oldItem!.numberOfItems - 1;
    //   }
    //   return {
    //     items: [...filteredItems, oldItem as ICartItem],
    //     totalPrice: state.totalPrice - action.payload?.price,
    //   };
    // }
    // case ActionTypes.INCREASE_NUMBER_OF_ITEMS_IN_CART:
    //   const oldItem = state.items.find((item) => item.id === action.payload.id);
    //   const filteredItems = state.items.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   oldItem!.numberOfItems = oldItem!.numberOfItems + 1;
    //   return {
    //     items: [...filteredItems, oldItem as ICartItem],
    //     totalPrice: state.totalPrice + action.payload.price,
    //   };

    default:
      return state;
  }
};
