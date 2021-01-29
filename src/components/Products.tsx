import React, { useEffect } from "react";
import Product from "./Item";
import "./Products.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Products: React.FC = (props) => {
  const bindedActionCreators = useActions();
  const { loading, error, data } = useTypedSelector((state) => state.products);

  useEffect(() => {
    bindedActionCreators.fetchPorducts();
  }, []);
  if (loading) {
    return (
      <div className='d-flex justify-content-center spinner--container'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className='row'>
      {data.map((item) => {
        console.log(item.id);
        return (
          <Product
            price={item.price}
            description={item.description}
            title={item.title}
            id={item.id}
            category={item.category}
            image={item.image}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
export default Products;
