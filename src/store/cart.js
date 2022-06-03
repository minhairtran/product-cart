import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  addedProductList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProductToCart(state, action) {
      const addedProduct = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        numberOfInventories: 1,
      };
      state.addedProductList.push(addedProduct);
    },
    addInventoryToCart(state, action) {
      const addedInventoryInfo = state.addedProductList.find(
        (addedProduct) => addedProduct.id === action.payload.id
      );
      addedInventoryInfo.numberOfInventories++;
    },
    removeInventoryFromCart(state, action) {
      const removeInventoryInfo = state.addedProductList.find(
        (removedProduct) => removedProduct.id === action.payload.id
      );
      removeInventoryInfo.numberOfInventories--;
      if (removeInventoryInfo.numberOfInventories === 0) {
        state.addedProductList = state.addedProductList.filter(
          (addedProduct) => addedProduct.id !== removeInventoryInfo.id
        );
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
