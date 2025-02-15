import React, { useContext } from "react";
import Product from "./Product";
import ProductCreateForm from "./ProductCreateForm";
import { GeneralContext } from "../context/GeneralContext";

const ProductGroup = () => {
  const { products } = useContext(GeneralContext);
  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup;
