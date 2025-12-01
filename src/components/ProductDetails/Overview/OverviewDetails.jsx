"use client";

import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
import CustomSlider from "./CustomSlider";
import Loader from "@/components/shared/Loader/Loader";

const OverviewDetails = ({ product }) => {
  if (!product) {
    return <Loader />;
  }

  const demoUrl = product?.attributes?.find(
    (attr) => attr.name === "demo-url"
  )?.value;

  const images = product?.previews?.landscape_preview?.image_urls || [];
  const mainImage = images[0]?.url || "/images/default-og.jpg";

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.slug}`;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl
    )}&text=${encodeURIComponent(product.name)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      product.name + " - " + pageUrl
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      pageUrl
    )}&text=${encodeURIComponent(product.name)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
    )}`,
  };

  return (
    <section className="overflow-hidden">
      {images.length > 0 && (
        <div className="w-full product-details-tab relative overflow-hidden border-b border-l border-r rounded-[16px] border-[#00000014] bg-[#FDFDFD]">
          <CustomSlider images={images} />

          <div className="p-[20px] lg:p-[30px] flex gap-[20px] justify-between flex-wrap items-center">
            {demoUrl && (
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn !bg-[#7A9C2B] flex items-center gap-2">
                  Live Preview
                  <img src="/icon/live.svg" alt="live" />
                </button>
              </Link>
            )}

            <div className="flex items-center gap-[10px]">
              <p className="text-[16px] lg:text-[20px] font-medium text-[#1A171799]">
                Share
              </p>

              <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] rounded-full border flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#f39022] hover:scale-110"
              >
                <img src="/icon/facebook.svg" alt="facebook" />
              </a>

              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] rounded-full border flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#f39022] hover:scale-110"
              >
                <img src="/icon/twiter.svg" alt="twitter" />
              </a>

              <a
                href={shareUrls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] rounded-full border flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#f39022] hover:scale-110"
              >
                <img src="/icon/whatsapp.svg" alt="whatsapp" />
              </a>

              <a
                href={shareUrls.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] rounded-full border flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#f39022] hover:scale-110"
              >
                <img src="/icon/teligram.svg" alt="telegram" />
              </a>

              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] w-[40px] rounded-full border flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out hover:border-[#f39022] hover:scale-110"
              >
                <img src="/icon/linkdin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#FDFDFD] border border-[#00000014] rounded-[10px] mt-[20px] lg:mt-[30px]">
        <p
          className="customDescription p-[20px] lg:p-[30px]"
          dangerouslySetInnerHTML={{ __html: product?.description_html }}
        />
      </div>
    </section>
  );
};

export default OverviewDetails;
