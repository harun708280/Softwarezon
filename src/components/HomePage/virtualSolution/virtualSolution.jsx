import ScrollBlurUp from "@/components/shared/SlideInText/ScrollBlurUp";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Image from "next/image";

export default function VirtualSolution() {
  return (
    <section className="container !py-[40px] md:!py-[60px] lg:!py-[120px]">
      <div className="flex gap-[30px] lg:gap-[66px] justify-between flex-col-reverse lg:flex-row items-center">
        <div className="flex-1">
          <Image
            src="/images/virtual-solution.png"
            alt="Virtual Software Solution"
            width={697}
            height={488}
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
            className="max-h-[488px] max-w-[697px] w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 md:text-center lg:text-left">
          <h2
            className="section-header pb-[25px] lg:pb-[40px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            We’re your trusted Software Development Studio
          </h2>
          <p
            className="bg-[#FFF5E6] w-fit mx-auto rounded-[7px] px-[10px] py-[15px] text-[18px] lg:text-[20px] text-[#626262]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            We craft scalable SaaS, CRM, and Blockchain solutions to power your
            growth. 🚀
          </p>
          <p
            className="text-[#626262] md:text-center lg:text-left text-[20px] leading-[29px] font-normal text-left pt-[25px] lg:pt-[30px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            At Softwarezon, we create powerful digital products—from SaaS and
            CRM platforms to FinTech and Blockchain solutions—that help
            businesses grow and scale
          </p>
          <p
            className=" md:text-center lg:text-left mx-auto text-[#626262] text-[20px] leading-[29px] font-normal pt-[20px] pb-[25px] lg:pb-[45px]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Our process covers everything from requirement analysis to Figma
            UI/UX design and full-stack development, ensuring every solution is
            modern, secure, and user-friendly.
          </p>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="350">
            <PrimaryButton label="Let’s Work Together" />
          </div>
        </div>
      </div>
    </section>
  );
}
