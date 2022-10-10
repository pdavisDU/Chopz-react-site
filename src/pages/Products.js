import React from "react";
import { ProductList } from "../helpers/ProductList";
import ProductItem from "../components/ProductItem";
import "../styles/Products.css";
function Products() {
  return (
    <div className="product">
      <h1 className="productTitle">Our Products</h1>
      <div className="productList">
        {ProductList.map((productItem, key) => {
          return (
            <ProductItem
              key={key}
              image={productItem.image}
              name={productItem.name}
              description={productItem.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
