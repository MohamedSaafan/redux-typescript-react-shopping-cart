import React from "react";
import Products from "./Products";
import { useActions } from "../hooks/useActions";

interface ItemProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  history: any;
}

const Product: React.FC<ItemProps> = ({
  id,
  image,
  title,
  description,
  price,
  category,
  history,
}) => {
  const bindedActionCreators = useActions();
  const handleAddToCart = () => {
    bindedActionCreators.AddItemToCart(id, +price, image, title);
    history.push("/cart");
  };
  return (
    <div className='card col-3 mb-3' style={{ width: "18rem" }}>
      <img className='card-img-top' src={image} alt='Card image cap' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <button className='btn btn-primary' onClick={handleAddToCart}>
          Add To Cart
        </button>{" "}
        <span>{price}</span>
        <div>{category}</div>
      </div>
    </div>
  );
};

export default Product;
