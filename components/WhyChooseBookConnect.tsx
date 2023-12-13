import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const WhyChooseBookConnect = () => {
  return (
    <section className=" min-h-[1300px] sm:min-h-[1200px] relative overflow-hidden  pb-10">
      <div className="container flex-col flex sm:flex-row gap-4 sm:items-center justify-between">
        <h2 className=" heading-3">Why Choose BookConnect?</h2>
        <button className=" inline-flex items-center gap-x-2">
          <span className=" text-xl font-normal text-brand-main">
            Get Started
          </span>
          <GoArrowRight className=" w-6 h-6 text-brand-main" />
        </button>
      </div>
      <div className=" container pt-10 flex flex-col lg:flex-row justify-between  gap-10">
        <div className="  basis-[calc(50%-40px)]">
          <div className="max-w-[510px] space-y-[30px]">
            <Image
              width={516}
              height={376}
              quality={80}
              className="relative z-20  object-contaimn rounded-b-lg rounded-tl-lg rounded-tr-[104px]"
              src={"/images/personalization.png"}
              alt="tarifalhasan"
            />
            <div className=" space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold leading-[120%] text-content-primary">
                Personalized Guidance
              </h2>
              <p className=" text-base lg:text-lg font-normal">
                Guiding Paths offers the opportunity to connect with mentors who
                can provide personalized guidance tailored to your unique goals
                and aspirations. Mentors can offer insights, advice, and
                strategies that are specific to your needs, helping you navigate
                challenges and make informed decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="  basis-[calc(50%-40px)]">
          <div className="max-w-[510px] mt-[40px] sm:mt-[150px] lg:mt-[400px] ml-auto space-y-[30px]">
            <div className=" space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold leading-[120%] text-content-primary">
                Personalized Guidance
              </h2>
              <p className=" text-base lg:text-lg font-normal">
                Guiding Paths offers the opportunity to connect with mentors who
                can provide personalized guidance tailored to your unique goals
                and aspirations. Mentors can offer insights, advice, and
                strategies that are specific to your needs, helping you navigate
                challenges and make informed decisions.
              </p>
            </div>
            <Image
              width={516}
              height={376}
              quality={80}
              className="o relative z-20 object-contaimn  rounded-t-lg rounded-bl-[104px]  rounded-br-lg "
              src={"/images/personalization.png"}
              alt="tarifalhasan"
            />
          </div>
        </div>
      </div>
      {/* shape 1 */}
      <div className=" h-[356px] sm:h-[438px] xl:h-[572px] absolute left-[-2%] lg:left-0 top-[22%] lg:top-[22%] sm:top-[18%] z-10 rounded-br-[60px] w-full lg:w-[50%] border border-l-[0] border-brand-main"></div>
      {/* shape 2 */}
      <div className=" h-[540px] sm:h-[572px] absolute right-[-2%] top-[52%] sm:top-[50%] lg:top-[30%] z-10 rounded-tl-[60px] w-full border-r-0 lg:w-[50%] border border-brand-main"></div>
    </section>
  );
};

export default WhyChooseBookConnect;
