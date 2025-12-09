"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Overview from "./Overview/Overview";
import Loader from "../shared/Loader/Loader";

const ProductDetails = ({ slug }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(slug)

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
      <Loader/>
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
      <div className="">
        <Banner name={product?.name} />
      </div>
      <div
        className=""
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <Overview product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
