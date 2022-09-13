import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./Products.css";
const Products = ({ productItems, handleAddProduct}) => {
  console.log("pitems", productItems);
  return (
      <div className="products">
        {productItems.map((productItem) => (
          <div className="card">
            <Modal image={{src:productItem.image, name: productItem.image}} />
            <h3 className="product-name">{productItem.name}</h3>
            <div className="product-price">{productItem.price}</div>
            <div>
              <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}> Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Products;
