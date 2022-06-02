import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  productList: [
    {
      id: "test-1",
      title: "Test 1",
      price: 6,
      description: "This is a first product - amazing!",
      isInCart: false,
    },
    {
      id: "test-2",
      title: "Test 2",
      price: 10,
      description: "This is a second product - amazing!",
      isInCart: false,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    addProductToCart(state, action) {
      const addedProductInfo = state.productList.find(
        (addedProduct) => addedProduct.id === action.payload.id
      );
      addedProductInfo.isInCart = true;
    },
    removeProductFromCart(state, action) {
      const removedProductInfo = state.productList.find(
        (removedProduct) => removedProduct.id === action.payload.id
      );
      removedProductInfo.isInCart = false;
    },
  },
});
export const productActions = productSlice.actions;

export default productSlice.reducer;
