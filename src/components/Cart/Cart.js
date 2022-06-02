import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const addedProductList = useSelector((state) => state.cart.addedProductList);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {addedProductList.length === 0 && (
        <div>There's no products in your cart</div>
      )}
      {!(addedProductList.length === 0) && (
        <ul>
          {addedProductList.map(
            (addedProduct) =>
              addedProduct.numberOfInventories > 0 && (
                <CartItem
                  key={addedProduct.id}
                  item={{
                    id: addedProduct.id,
                    title: addedProduct.title,
                    quantity: addedProduct.numberOfInventories,
                    total:
                      addedProduct.price * addedProduct.numberOfInventories,
                    price: addedProduct.price,
                  }}
                />
              )
          )}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
