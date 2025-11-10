"use client";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/shop-management.png",
      title: "Shop Management System",
      description:
        "We create smart contracts, ICO/IDO platforms, trading apps, and digital wallets—bringing secure.",
      price: "$12",
      sale: "34 Sale",
      rating: 4.9,
      starImg: "/images/5-star.svg",
    },
    {
      id: 2,
      image: "/images/forex.png",
      title:
        "Forex Trade Signal and Crypto Currency Trade Signal Notifier Telegram Supported Platform",
      description:
        "We create smart contracts, ICO/IDO platforms, trading apps, and digital wallets—bringing secure.",
      price: "$12",
      sale: "34 Sale",
      rating: 4.9,
      starImg: "/images/5-star.svg",
    },
    {
      id: 3,
      image: "/images/my-shop.png",
      title:
        "myShop - Installment and Due Sell Supported Powerful Shop Management System",
      description:
        "We create smart contracts, ICO/IDO platforms, trading apps, and digital wallets—bringing secure.",
      price: "$12",
      sale: "34 Sale",
      rating: 4.9,
      starImg: "/images/5-star.svg",
    },
    {
      id: 4,
      image: "/images/ecommerce.png",
      title:
        "Ecommerce - Cryptocurrency Supported Responsive eCommerce Business Platform",
      description:
        "We create smart contracts, ICO/IDO platforms, trading apps, and digital wallets—bringing secure.",
      price: "$12",
      sale: "34 Sale",
      rating: 4.9,
      starImg: "/images/5-star.svg",
    },
  ];

  return (
    <section className="container !py-[40px] md:!py-[60px] lg:!py-[140px]">
      <div className="md:text-center max-w-[740px] mx-auto">
        <h2 className="section-header">Check-Out Our Products</h2>
        <p className="section-description pt-[10px] lg:pt-[15px]">
          Production-ready apps, scripts, and components—built with Laravel,
          Vue/Nuxt, Node.js & Web3. Secure, scalable, and easy to deploy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[40px] pt-[40px] lg:pt-[50px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="group border border-[#000000]/8 rounded-[10px] shadow-[10px_12px_60px_0px_#0000001A] transition-transform duration-300 hover:scale-100 hover:shadow-[0_30px_40px_rgba(0,0,0,0.1)] flex flex-col h-full"
          >
            <div className="">
              <Image
                src={product.image}
                alt={product.title}
                width={645}
                height={334}
                className="object-cover rounded-t-[10px]"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 py-[24px] px-[20px]">
              <div>
                <h6 className="text-primary text-[18px] lg:text-[20px] font-semibold line-clamp-1">
                  {product.title}
                </h6>
                <p className="pt-[10px] lg:pt-[14px] pb-[25px] lg:pb-[40px] text-[16px] text-[#777777] leading-[26px]">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[26px] font-semibold flex items-center gap-2">
                    {product.price}{" "}
                    <span className="text-[16px] font-normal">
                      ({product.sale})
                    </span>
                  </p>

                  <div className="flex items-center gap-2">
                    <Image
                      src={product.starImg}
                      alt={`Rating ${product.rating}`}
                      width={145}
                      height={29}
                      className="object-cover"
                    />
                    <span className="text-[16px] font-normal">
                      ({product.rating})
                    </span>
                  </div>
                </div>

                <div className="flex gap-[15px] flex-wrap">
                  <PrimaryButton
                    label="Add to Cart"
                    icon={ShoppingCart}
                    iconClassName="w-5 h-5 fill-white"
                  />
                  <SecondaryButton
                    text="Buy From Envato"
                    imgSrc="/images/envarto-icon.svg"
                    alt="Envato"
                  />
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
