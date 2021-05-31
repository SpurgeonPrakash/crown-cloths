import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems, history, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      {/*<CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton> */}
      <CustomButton
        onClick={() => {
          otherProps.dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
    // cartItems: state.cart.cartItems,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCartHidden: () => dispatch(toggleCartHidden()),
//   };
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));

// If You are not providing mapDispatchToProps to connect() below, connect will automatically pass dispatch() as a prop to Cart Component
export default withRouter(connect(mapStateToProps)(Cart));
