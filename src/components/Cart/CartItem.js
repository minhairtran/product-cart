import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addProductToCartHandler = () => {
    dispatch(cartActions.addInventoryToCart({ id }));
  };

  const removeProductToCartHandler = () => {
    dispatch(cartActions.removeInventoryFromCart({ id }));
    if (quantity <= 1) {
      dispatch(productActions.removeProductFromCart({ id }));
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProductToCartHandler}>-</button>
          <button onClick={addProductToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
