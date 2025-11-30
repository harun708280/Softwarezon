"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Overview from "./Overview/Overview";

const ProductDetails = ({ slug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    setLoading(true); 
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false)); 
  }, [slug]);

  const product = data?.matches?.find((item) => item.slug === slug);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg text-gray-500">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-lg text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div>
      <Banner name={product?.name} />
      <Overview product={product} />
    </div>
  );
};

export default ProductDetails;
