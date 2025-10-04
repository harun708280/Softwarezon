
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Image from "next/image";

export default function VirtualSolution() {
  return (
    <section className="container !py-[40px] md:!py-[60px] lg:!py-[140px]">
      <div className="flex gap-[30px] lg:gap-[66px] justify-between flex-col-reverse lg:flex-row items-center">
      
        <div className="flex-1">
          <Image
            src="/images/virtual-solution.png"
            alt="Virtual Software Solution"
            width={697}
            height={488}
            className="max-h-[488px] max-w-[697px] w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h1 className="section-header pb-[25px] lg:pb-[40px]">
            We’re your trusted Software Development Studio
          </h1>
          <p className="bg-[#FFF5E6] rounded-[7px] px-[10px] py-[15px] text-[18px] lg:text-[20px] text-[#626262]">
            We craft scalable SaaS, CRM, and Blockchain solutions to power your
            growth. 🚀
          </p>
          <p className="text-[#626262] text-[20px] leading-[29px] font-normal text-left pt-[25px] lg:pt-[30px]">
            At Softwarezon, we create powerful digital products—from SaaS and
            CRM platforms to FinTech and Blockchain solutions—that help
            businesses grow and scale
          </p>
          <p className="!text-left text-[#626262] text-[20px] leading-[29px] font-normal pt-[20px] pb-[25px] lg:pb-[45px]">
            Our process covers everything from requirement analysis to Figma
            UI/UX design and full-stack development, ensuring every solution is
            modern, secure, and user-friendly.
          </p>

          <PrimaryButton label="Let’s Work Together" />
        </div>
      </div>
    </section>
  );
}
