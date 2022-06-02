import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";
import { productActions } from "../../store/product";
import React from "react";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id, isInCart } = props;

  const addProductToCartHandler = () => {
    dispatch(cartActions.addProductToCart({ id, title, price }));
    dispatch(productActions.addProductToCart({ id }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addProductToCartHandler} disabled={isInCart}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
