import React from "react";

const Product = (props) => {
  console.log(props);
  // Note: this id should come from api
  // const product = { id: 1 };
  return (
    <div data-cy={`product-${props.el.id}`}>
      <h3 data-cy="product-name">{props.el.name}</h3>
      <h6 data-cy="product-description">{props.el.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add TO CART</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
