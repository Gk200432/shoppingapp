import React from 'react';

function Cart({ cartItems, updateQuantity }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="cart">
      <br />
      <hr />
      <center>
        <h2 style={{ color: 'red', fontWeight: 'bold' }}>Your Cart</h2>
      </center>
      {cartItems.map((cartItem, index) => (
        <React.Fragment key={index}>
          <div style={{ paddingLeft: "10px", color: 'black' }} className="cart-item">
            <img
              className="cart-item-image"
              src={cartItem.product.imgurl}
              alt={cartItem.product.name}
            />
            <div style={{ paddingLeft: "20px" }}>
              <h3>Size: {cartItem.product.size}</h3>
              <h3>Cost: Rs.{cartItem.product.price}</h3>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => updateQuantity(index, cartItem.quantity - 1)}>-</button>
              <p style={{ padding: "5px" }}>{cartItem.quantity}</p>
              <button
                onClick={() => updateQuantity(index, cartItem.quantity + 1)}
                disabled={cartItem.quantity >= cartItem.product.qty}
              >
                +
              </button>
              {cartItem.quantity > cartItem.product.qty && (
                <p style={{ color: 'red', textAlign: 'center', paddingLeft: '20px' }}>
                  Out of Stock
                </p>
              )}
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
      <h2 style={{ color: "black", textAlign:"center" }}>
        Total Price: Rs.{totalPrice}
      </h2>
      <br />
      <br />
    </div>
  );
}

export default Cart;
