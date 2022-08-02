import "./checkout.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemToCart(cartItem)}>decreament</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increament</span>
          </div>
        );
      })}
      <span className="total">Total:0</span>
    </div>
  );
};

export default Checkout;
