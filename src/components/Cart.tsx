import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CartItem from "./CartItem";

const Cart: React.FC = (props) => {
  const { items, totalPrice } = useTypedSelector((state) => state.cart);

  if (items.length > 0) {
    return (
      <div>
        <h3 className='centered mb-4 ml-5'>Total Price is, {totalPrice}</h3>
        <div className='row'>
          {items.map(({ id, title, image, price, numberOfItems }) => {
            return (
              <CartItem
                id={id}
                key={id}
                image={image}
                title={title}
                price={price}
                numberOfItems={numberOfItems}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return <div>Cart Is Empty</div>;
};
export default Cart;
