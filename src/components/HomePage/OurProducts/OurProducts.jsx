import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div className=" container !py-[40px] md:!py-[60px] lg:!py-[140px]">
      <div className="text-center max-w-[740px] mx-auto">
        <h1 className="section-header">Check-Out Our Products</h1>
        <p className="section-description pt-[10px] lg:pt-[15px]">
          Production-ready apps, scripts, and components—built with Laravel,
          Vue/Nuxt, Node.js & Web3. Secure, scalable, and easy to deploy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-[30px] lg:gap-[40px] pt-[40px] lg:pt-[50px]">
        <div className="border border-[#000000]/8 rounded-[10px] shadow-[10px_12px_60px_0px_#0000001A] transition-shadow duration-300">
          <div className="">
            <Image
              src="/images/shop-management.png"
              alt="Product 1"
              width={645}
              height={334}
              className="object-cover"
            />
          </div>
          <div className="py-[24px] px-[20px] ">
            <h6 className="text-primary text-[18px] lg:text-[20px] font-semibold">
              Shop Management System
            </h6>

            <p className="pt-[10px] lg:pt-[14px] pb-[25px] lg:pb-[40px] text-[16px] text-[#777777] leading-[26px]">
              We create smart contracts, ICO/IDO platforms, trading apps, and
              digital wallets—bringing secure.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-[26px] font-semibold flex items-center gap-2">
                $12 <span className="text-[16px] font-normal">(34 Sale)</span>
              </p>

              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/5-star.svg"
                  alt="Product 1"
                  width={145}
                  height={29}
                  className="object-cover"
                />
                <span className="text-[16px] font-normal">(4.9)</span>
              </div>
              <div className="border-t border-[#E5E5E5] w-full"></div>
            </div>

            <div className="flex gap-[15px] flex-wrap pt-[10px] lg:pt-[20px]">
              <PrimaryButton
                label="Add to Cart"
                icon={ShoppingCart}
                iconClassName="w-5 h-5 fill-white"
              />
              <button className="primary-button-2 rounded-full">
                Buy From Envato
                <Image
                  src="/images/envarto-icon.svg"
                  alt="Product 1"
                  width={16}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#000000]/8 rounded-[10px] shadow-[10px_12px_60px_0px_#0000001A] transition-shadow duration-300">
          <div className="">
            <Image
              src="/images/forex.png"
              alt="forex"
              width={645}
              height={334}
              className="object-cover"
            />
          </div>
          <div className="py-[24px] px-[20px] ">
            <h6 className="text-primary text-[18px] lg:text-[20px] font-semibold">
              Forex Trade Signal and Crypto Currency Trade Signal Notifier
              Telegram Supported Platform
            </h6>

            <p className="pt-[10px] lg:pt-[14px] pb-[25px] lg:pb-[40px] text-[16px] text-[#777777] leading-[26px]">
              We create smart contracts, ICO/IDO platforms, trading apps, and
              digital wallets—bringing secure.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-[26px] font-semibold flex items-center gap-2">
                $12 <span className="text-[16px] font-normal">(34 Sale)</span>
              </p>

              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/5-star.svg"
                  alt="Product 1"
                  width={145}
                  height={29}
                  className="object-cover"
                />
                <span className="text-[16px] font-normal">(4.9)</span>
              </div>
              <div className="border-t border-[#E5E5E5] w-full"></div>
            </div>

            <div className="flex gap-[15px] flex-wrap pt-[10px] lg:pt-[20px]">
              <PrimaryButton
                label="Add to Cart"
                icon={ShoppingCart}
                iconClassName="w-5 h-5 fill-white"
              />
              <button className="primary-button-2 rounded-full">
                Buy From Envato
                <Image
                  src="/images/envarto-icon.svg"
                  alt="Product 1"
                  width={16}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#000000]/8 rounded-[10px] shadow-[10px_12px_60px_0px_#0000001A] transition-shadow duration-300">
          <div className="">
            <Image
              src="/images/my-shop.png"
              alt="Product 1"
              width={645}
              height={334}
              className="object-cover"
            />
          </div>
          <div className="py-[24px] px-[20px] ">
            <h6 className="text-primary text-[18px] lg:text-[20px] font-semibold">
              myShop - Installment and Due Sell Supported Powerful Shop
              Management System
            </h6>

            <p className="pt-[10px] lg:pt-[14px] pb-[25px] lg:pb-[40px] text-[16px] text-[#777777] leading-[26px]">
              We create smart contracts, ICO/IDO platforms, trading apps, and
              digital wallets—bringing secure.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-[26px] font-semibold flex items-center gap-2">
                $12 <span className="text-[16px] font-normal">(34 Sale)</span>
              </p>

              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/5-star.svg"
                  alt="Product 1"
                  width={145}
                  height={29}
                  className="object-cover"
                />
                <span className="text-[16px] font-normal">(4.9)</span>
              </div>
              <div className="border-t border-[#E5E5E5] w-full"></div>
            </div>

            <div className="flex gap-[15px] flex-wrap pt-[10px] lg:pt-[20px]">
              <PrimaryButton
                label="Add to Cart"
                icon={ShoppingCart}
                iconClassName="w-5 h-5 fill-white"
              />
              <button className="primary-button-2 rounded-full">
                Buy From Envato
                <Image
                  src="/images/envarto-icon.svg"
                  alt="Product 1"
                  width={16}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#000000]/8 rounded-[10px] shadow-[10px_12px_60px_0px_#0000001A] transition-shadow duration-300">
          <div className="">
            <Image
              src="/images/ecommerce.png"
              alt="Product 1"
              width={645}
              height={334}
              className="object-cover"
            />
          </div>
          <div className="py-[24px] px-[20px] ">
            <h6 className="text-primary text-[18px] lg:text-[20px] font-semibold">
              Ecommerce - Cryptocurrency Supported Responsive eCommerce Business
              Platform
            </h6>

            <p className="pt-[10px] lg:pt-[14px] pb-[25px] lg:pb-[40px] text-[16px] text-[#777777] leading-[26px]">
              We create smart contracts, ICO/IDO platforms, trading apps, and
              digital wallets—bringing secure.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-[26px] font-semibold flex items-center gap-2">
                $12 <span className="text-[16px] font-normal">(34 Sale)</span>
              </p>

              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/5-star.svg"
                  alt="Product 1"
                  width={145}
                  height={29}
                  className="object-cover"
                />
                <span className="text-[16px] font-normal">(4.9)</span>
              </div>
              <div className="border-t border-[#E5E5E5] w-full"></div>
            </div>

            <div className="flex gap-[15px] flex-wrap pt-[10px] lg:pt-[20px]">
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
    </div>
  );
};

export default OurProducts;
