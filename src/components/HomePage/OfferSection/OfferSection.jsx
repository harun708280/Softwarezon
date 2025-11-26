import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ScrollBlurUp from "@/components/shared/SlideInText/ScrollBlurUp";
const offers = [
  {
    id: "01/04",
    title: "UI/UX Design",
    desc: "We craft clean, modern, and intuitive designs with Figma, ensuring every product is user-friendly and visually engaging ",
    icon: "/images/ui-icon.svg",
    gradient: "from-[#4D46C7] to-[#6D65FC]",
  },
  {
    id: "02/04",
    title: "Web Design & Development",
    desc: "From SaaS platforms to custom CRMs, we build secure, scalable, and high-performing applications using Laravel, Vue, Nuxt, and Node.js. ",
    icon: "/images/web-icon-2.svg",
    gradient: "from-[#FFC806] to-[#FF6A4D]",
  },
  {
    id: "03/04",
    title: "Mobile App Development",
    desc: "We develop cross-platform apps with smooth performance and sleek design, helping businesses reach customers anytime, anywhere. ",
    icon: "/images/mobile-dev-icon.svg",
    gradient: "from-[#F85374] to-[#EE2A52]",
  },
  {
    id: "04/04",
    title: "Blockchain & FinTech Solutions",
    desc: "We create smart contracts, ICO/IDO platforms, trading apps, and digital wallets—bringing secure Web3 and FinTech innovation to your business.",
    icon: "/images/ContentWriting-icon.svg",
    gradient: "from-[#C3DB8C] to-[#7A9C2B]",
  },
];

function OfferCard({ item }) {
  return (
    <div className="group border border-[#00000014] py-[20px] px-[25px] lg:px-[50px] rounded-[10px] hover:shadow-[10px_12px_60px_0px_#0000001A] transition-shadow duration-300">
      <div className="flex items-center justify-between hover:border-none transition-opacity duration-300">
        <div
          className={`rounded-full bg-gradient-to-tr ${item.gradient} flex items-center justify-center`}
        >
          <Image
            src={item.icon}
            alt={item.title}
            width={100}
            height={100}
            className="p-[10px] lg:p-[25px] h-14 w-14 md:w-auto  md:h-auto"
          />
        </div>
        <p className=" text-[#777777] text-[22px] lg:text-[30px]">{item.id}</p>
      </div>

      <div className="pt-[17px] text-left">
        <h3 className="text-[20px] lg:text-[34px] leading-tight font-semibold">
          {item.title}
        </h3>
        <p className="text-[16px] lg:text-[18px] text-[#777777] pt-[10px] lg:pt-[20px] pb-[20px] lg:pb-[30px] group-hover:text-[#555555] transition-colors duration-300">
          {item.desc}
        </p>
        <button className="text-[18px] flex items-center text-primary pb-[8px] transition-all duration-300 group-hover:border-b-2 group-hover:border-[#F7A421] group-hover:font-semibold group-hover:text-[#F7A421] border-b-2 border-transparent cursor-pointer">
          Learn More <ChevronRight className="h-[20px] w-[20px]" />
        </button>
      </div>
    </div>
  );
}

export default function OfferSection() {
  return (
    <section className="container md:text-center">
      <ScrollBlurUp>
        <h2 className="section-header ">Explore What We Offer</h2>
        <p className="max-w-[521px] mx-auto section-description pt-[10px] lg:pt-[15px]">
          From design to development, we build the future of SaaS, FinTech &
          Web3.
        </p>
      </ScrollBlurUp>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] lg:gap-[44px] pt-[30px] lg:pt-[50px]">
        {offers.map((item, index) => (
          <OfferCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
