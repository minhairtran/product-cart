import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const addedProductList = useSelector((state) => state.cart.addedProductList);

  const countAddedInventories = (addedProductList) => {
    let sum = 0;
    addedProductList.forEach((item) => {
      sum += item.numberOfInventories;
    });
    return sum;
  };

  let totalNumberOfAddedInventories = 0;
  let countTotalNumberOfAddedInventories =
    addedProductList.length === 0
      ? totalNumberOfAddedInventories
      : countAddedInventories(addedProductList);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {countTotalNumberOfAddedInventories}
      </span>
    </button>
  );
};

export default CartButton;
