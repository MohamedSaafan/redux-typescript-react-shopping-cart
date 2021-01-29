import React from "react";

interface ICartItem {
  image: string;
  title: string;
  price: number;
  id: number;
}
const CartItem: React.FC<ICartItem> = ({ image, title, price, id }) => {
  return (
    <div className='card col-3 mb-3' style={{ width: "18rem" }}>
      <img className='card-img-top' src={image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <span>{price}</span>
      </div>
    </div>
  );
};
export default CartItem;
