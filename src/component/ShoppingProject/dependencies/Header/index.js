import React, { useContext } from "react";
import CartModal from "../CartModal";
import {CartContext} from "../../store/ShoppingCart"

const Header = (props) => {

  const { setIsModalOpen, isModalOpen } = props

  const { items } = useContext(CartContext);
  const cartQuantity = items.length;

  const handleOpenCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  let modalActions = (
    <>
      <button onClick={handleCloseModal}>Close</button>
      <button>Checkout</button>
    </>
  );

  if (cartQuantity === 0) {
    modalActions = <button onClick={handleCloseModal}>Close</button>;
  }

  return (
    <>
      {isModalOpen && (
        <CartModal
          onUpdateCartItemQuantity={cartQuantity}
          title="Your Cart"
          actions={modalActions}
          handleCloseModal={handleCloseModal}
        />
      )}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {cartQuantity}</button>
        </p>
      </header>
    </>
  );
};

export default Header;


