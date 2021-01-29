import React from "react";
import { useActions } from "../hooks/useActions";

interface ICartItem {
  image: string;
  title: string;
  price: number;
  id: number;
  numberOfItems: number;
}
const CartItem: React.FC<ICartItem> = ({
  image,
  title,
  price,
  id,
  numberOfItems,
}) => {
  const bindedActionCreators = useActions();
  return (
    <div className='card col-3 mb-3' style={{ width: "18rem" }}>
      <img className='card-img-top' src={image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <h6>number Of Items is: {numberOfItems}</h6>
        <span>price: {price}</span>
        <span>total Price : {price * numberOfItems}</span>
        <br />
        <button
          className='btn btn-danger ml-auto d-block '
          onClick={() => bindedActionCreators.RemoveItemFromCart(id, price)}
        >
          Remove Item
        </button>
        <br />
        {numberOfItems > 1 && (
          <button
            className='btn btn-danger'
            onClick={() =>
              bindedActionCreators.DecreaseNumberOfItemsByOne(id, price)
            }
          >
            Decrease Number Of Items By One
          </button>
        )}
        <br />
        <br />
        <button
          className='btn btn-primary'
          onClick={() =>
            bindedActionCreators.IncreaseNumberOfItemsByOne(id, price)
          }
        >
          Increase Number Of Items By One
        </button>
      </div>
    </div>
  );
};
export default CartItem;
