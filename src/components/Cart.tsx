import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CartItem from "./CartItem";

const Cart: React.FC = (props) => {
  const { items } = useTypedSelector((state) => state.cart);

  if (items.length > 0) {
    return (
      <div className='row'>
        {items.map(({ id, title, image, price }) => {
          return (
            <CartItem
              id={id}
              key={id}
              image={image}
              title={title}
              price={price}
            />
          );
        })}
      </div>
    );
  }
  return <div>Cart Is Empty</div>;
};
export default Cart;
