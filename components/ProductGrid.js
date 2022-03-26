import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid(props) {
  return (
    <div className="product-grid-wrapper">
      <div className="small-font" style={{ color: "#000" }}>
        <b>1-10 </b> of over 100,000 results
      </div>
      <div className="products">
        {props &&
          props.productsList &&
          props.productsList.map((item, key) => (
            <ProductCard item={item} key={key}></ProductCard>
          ))}
      </div>
    </div>
  );
}

export default ProductGrid;
