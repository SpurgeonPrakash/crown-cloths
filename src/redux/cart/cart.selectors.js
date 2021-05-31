import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log("reduced quantity");
    return cartItems.reduce((quantAccumulator, cartItem) => {
      return quantAccumulator + cartItem.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((totalCostAccumulator, cartItem) => {
      return totalCostAccumulator + cartItem.quantity * cartItem.price;
    }, 0);
  }
);
