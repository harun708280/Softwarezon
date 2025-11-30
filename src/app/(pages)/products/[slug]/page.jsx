import ProductDetails from "@/components/ProductDetails/ProductDetails";
import React from "react";

const Product = ({ params }) => {
  const { slug } = params;

  

  return (
    <div>
      <ProductDetails slug={slug} />
    </div>
  );
};

export default Product;
