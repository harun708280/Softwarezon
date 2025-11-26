import ScrollBlurUp from "@/components/shared/SlideInText/ScrollBlurUp";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Image from "next/image";

export default function VirtualSolution() {
  return (
    <section className="container !py-[40px] md:!py-[60px] lg:!py-[120px]">
      <div className="flex gap-[30px] lg:gap-[66px] justify-between flex-col-reverse lg:flex-row items-center">
        <div className="flex-1">
          <ScrollBlurUp>
            <Image
              src="/images/virtual-solution.png"
              alt="Virtual Software Solution"
              width={697}
              height={488}
              className="max-h-[488px] max-w-[697px] w-full h-full object-contain"
            />
          </ScrollBlurUp>
        </div>

        <div className="flex-1 md:text-center lg:text-left">
           <ScrollBlurUp>
          <h2 className="section-header pb-[25px] lg:pb-[40px]">
            We’re your trusted Software Development Studio
          </h2>
          <p className="bg-[#FFF5E6] w-fit mx-auto rounded-[7px] px-[10px] py-[15px] text-[18px] lg:text-[20px] text-[#626262]">
            We craft scalable SaaS, CRM, and Blockchain solutions to power your
            growth. 🚀
          </p>
          <p className="text-[#626262] md:text-center lg:text-left text-[20px] leading-[29px] font-normal text-left pt-[25px] lg:pt-[30px]">
            At Softwarezon, we create powerful digital products—from SaaS and
            CRM platforms to FinTech and Blockchain solutions—that help
            businesses grow and scale
          </p>
          <p className=" md:text-center lg:text-left mx-auto text-[#626262] text-[20px] leading-[29px] font-normal pt-[20px] pb-[25px] lg:pb-[45px]">
            Our process covers everything from requirement analysis to Figma
            UI/UX design and full-stack development, ensuring every solution is
            modern, secure, and user-friendly.
          </p>

          <PrimaryButton label="Let’s Work Together" />
          </ScrollBlurUp>
        </div>
      </div>
    </section>
  );
}
