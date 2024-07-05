// Show.js
import React from 'react';

function Show({ filteredProducts, addToCart }) {
  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-image" src={product.imgurl} alt={product.pdtname} />
          <div className="product-info">
            <p>Quantity: {product.qty}</p>
            <p>Size: {product.size}</p>
            <p>Cost: Rs.{product.price}</p>
          </div>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Show;
