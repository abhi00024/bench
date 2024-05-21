import React from 'react';
import Cart from '../Cart';

const CartModal = (props) => {

  const { title, actions, handleCloseModal } = props

  return (
    <>
      <div id="modal-overlay" onClick={handleCloseModal}>
        <div id="modal" onClick={(e) => e.stopPropagation()}>
          <div id="modal-content">
            <h2>{title}</h2>
            <Cart/>
            <form method="dialog" id="modal-actions">
              {actions}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
