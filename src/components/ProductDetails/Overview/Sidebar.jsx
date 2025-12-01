"use client";
import React, { useState, useMemo } from "react";
import { ChevronDown, CircleCheck, ShoppingCart } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import Link from "next/link";

const Sidebar = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState("Regular License");

  console.log(product);

  const licenses = [
    {
      title: "Regular License",
      price: `USD ${product?.price_cents/100}`,

      desc: "Use, by you or one client, in a single end product which end users are not charged for. The total price includes the item price and a buyer fee.",
    },
    {
      title: "Extended License",
      price: `USD ${product?.price_cents_extends/100}`,

      desc: "Use, by you or one client, in a single end product which end users can be charged for. The total price includes the item price and a buyer fee.",
    },
  ];

  const licenseInfo = [
    "Free technical support",
    "Future product updates",
    "Quality checked by THESOFTKING",
    "Lowest price guarantee",
    "3 months support included",
  ];

  const licenseDetails = useMemo(() => {
    if (!product) return [];

    const details = [];

    details.push([
      {
        label: "First Release",
        value: new Date(product.published_at).toLocaleDateString(),
      },
      {
        label: "Last Update",
        value: new Date(product.updated_at).toLocaleDateString(),
      },
    ]);

    details.push({
      label: "Rating",
      value: product.rating
        ? `${product.rating.rating} (${product.rating.count} reviews)`
        : "N/A",
    });

    // // 4. Price
    // details.push({
    //   label: "Price",
    //   value: `$${(product.price_cents / 100).toFixed(2)}`,
    // });

    // // 5. Author
    // details.push({
    //   label: "Author",
    //   value: product.author_username,
    // });

    // 6. Summary
    // details.push({
    //   label: "Summary",
    //   value: product.summary || "N/A",
    // });

    product.attributes?.forEach((attr) => {
      if (attr.name === "demo-url") return;

      const label = attr.name
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      const value =
        Array.isArray(attr.value) && attr.value.length
          ? attr.value.join(", ")
          : attr.value || "N/A";

      details.push({ label, value });
    });

    details.push({
      label: "Tags",
      value: product.tags?.length ? product.tags.join(", ") : "N/A",
    });

    return details;
  }, [product]);

  const mainPrice = licenses.find((l) => l.title === selectedLicense)?.price;

  return (
    <section className="sticky top-20">
      <div className="border border-[#00000014] rounded-[5px] bg-[#FDFDFD]">
        <div
          onClick={() => setShowPopup(!showPopup)}
          className="p-[15px] lg:p-[20px] border-b border-[#00000014] flex justify-between items-center cursor-pointer select-none relative"
        >
          <p className="text-[#474545] text-[16px] font-medium lg:text-[24px] flex items-center gap-2">
            {selectedLicense}
            <ChevronDown
              className={`transition-transform duration-300 ${
                showPopup ? "rotate-180" : ""
              }`}
            />
          </p>
          <p className="text-[#0FAAB8] text-[16px] lg:text-[24px] font-bold">
            {mainPrice}
          </p>

          {showPopup && (
            <div className="absolute top-full -mt-1 left-1/2 -translate-x-1/2 w-[90%] border border-[#00000014] bg-[#FDFDFD] rounded-md shadow-lg animate-slideDown z-20">
              <div className="h-[25px] w-[25px] absolute bg-[#FDFDFD] left-[5%] -top-[13px] rotate-45 border-l border-t border-[#00000014] z-30"></div>

              {licenses.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 border-b border-dotted last:border-none transition-all cursor-pointer`}
                  onClick={() => {
                    setSelectedLicense(item.title);
                    setShowPopup(false);
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-[16px] text-[#222] flex items-center gap-2">
                      {item.title}
                      {selectedLicense === item.title && (
                        <span className="bg-[#10CA2E] text-white text-xs px-2 py-[2px] rounded">
                          SELECTED
                        </span>
                      )}
                    </p>
                    <p className="text-[#0FAAB8] font-medium">{item.price}</p>
                  </div>
                  <p className="text-[#474545] text-sm leading-[22px]">
                    {item.desc}
                  </p>
                </div>
              ))}

              <div className="text-center py-3 text-[#0FAAB8] font-medium border-t hover:underline cursor-pointer">
                View license details
              </div>
            </div>
          )}
        </div>

        <div className="p-[15px] lg:p-[20px]">
          <ul className="text-[#474545] text-sm space-y-3 lg:text-[16px] leading-[28px]">
            {licenseInfo.map((item, index) => (
              <li key={index} className="flex gap-1.5 items-center">
                <span className="text-[#10CA2E]">
                  <CircleCheck height={20} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[20px] px-[15px] lg:px-[20px] pb-[20px] lg:pb-[30px]">
          <Link href={product?.url} target="_blank" className="w-full product-details-btn text-white flex justify-center rounded-full hover:opacity-50">
            
           <span>Buy From Envato</span>
            <img src="/images/envarto-icon.svg" alt="" />
          </Link>
        </div>
      </div>
      <p className="p-[15px] lg:p-[20px] bg-[#474545] rounded-[5px] text-white text-[16px] font-medium lg:text-[24px] mt-[20px] lg:mt-[30px]">
        Total Sell - {product?.number_of_sales}
      </p>

      <div className="border border-[#00000014] overflow-hidden mt-[20px] lg:mt-[30px] rounded-[5px]">
        {licenseDetails.map((item, index) => {
          const hasBg = index % 2 !== 0;

          if (Array.isArray(item)) {
            return (
              <div
                key={index}
                className={`text-[16px] lg:text-[1px] ${
                  hasBg ? "bg-white" : ""
                } border-b border-gray-200 p-[15px] lg:p-[20px]`}
              >
                {item.map((subItem, subIndex) => (
                  <div key={subIndex} className="flex justify-between py-1">
                    <p className="text-[#474545] text-[16px] lg:text-[16px]">
                      {subItem.label} :{" "}
                    </p>
                    <p className="text-[16px]">{subItem.value}</p>
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className={`${
                  hasBg ? "bg-[#f5f4f4]" : ""
                } flex justify-between gap-[10px] flex-wrap p-[15px] lg:p-[15px]`}
              >
                <p className=" text-[16px] lg:text-[16px]">{item.label}: </p>
                <p className="text-[16px] lg:text-[16px] text-[#474545]">
                  {item.value}
                </p>
              </div>
            );
          }
        })}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Sidebar;
