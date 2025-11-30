"use client";
import CustomDescription from "@/components/ProductDetails/Overview/CustomDescription";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OurProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const productData = data.matches;

  return (
    <section className="container !py-[40px] md:!py-[60px] lg:!py-[120px]">
      <div
        className="md:text-center max-w-[740px] mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <h2 className="section-header">Check-Out Our Products</h2>
        <p className="section-description pt-[10px] lg:pt-[15px]">
          Production-ready apps, scripts, and components—built with Laravel,
          Vue/Nuxt, Node.js & Web3. Secure, scalable, and easy to deploy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[40px] pt-[40px] lg:pt-[50px]">
        {productData?.map((product, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="800"
            className="group border border-[#000000]/8 rounded-[10px] overflow-hidden 
             shadow-[0_8px_20px_rgba(0,0,0,0.05)]
             transition-shadow duration-700 ease-out
             hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
             flex flex-col h-full will-change-transform"
          >
            <div className="overflow-hidden rounded-t-[10px] transition-transform duration-700 ease-out group-hover:scale-102 will-change-transform p-4 relative h-[335px]">
              <Image
                src={
                  product?.previews?.icon_with_landscape_preview?.landscape_url
                }
                alt={product.name}
                width={445}
                height={334}
                className=" w-full h-full rounded-md"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 py-6 px-5 transition-transform duration-700 ease-out group-hover:-translate-y-0.5 will-change-transform">
              <div>
                <h6 className="text-primary text-[18px] lg:text-[20px] font-semibold line-clamp-2 transition-colors duration-700 group-hover:text-[#333333]">
                  {product.name}
                </h6>
                <p className="pt-2 lg:pt-3 pb-6 lg:pb-6 text-[16px] text-[#777777] leading-[26px] transition-colors duration-700 group-hover:text-[#555555]  overflow-hidden">
                  {product.short_description}
                </p>
              </div>

              

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[26px] font-semibold flex items-center gap-2 transition-colors duration-700 group-hover:text-primary">
                    {product.price_cents / 100}
                    {"$"}
                    <span className="text-[16px] font-normal">
                      ({product.number_of_sales})
                    </span>
                  </p>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/5-star.svg"
                      alt={`Rating ${product.rating.rating}`}
                      width={145}
                      height={29}
                      className="object-cover"
                    />
                    <span className="text-[16px] font-normal">
                      ({product?.rating?.rating})
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href={`products/${product.slug}`}>
                    <PrimaryButton
                      label="View Details"
                      icon={ArrowRight}
                      iconClassName="w-5 h-5 "
                    />
                  </Link>
                  <Link href={product?.url} target="_blank">
                    <SecondaryButton
                      text="Buy From Envato"
                      imgSrc="/images/envarto-icon.svg"
                      alt="Envato"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
