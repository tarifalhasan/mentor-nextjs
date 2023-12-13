import Image from "next/image";

const Features = () => {
  return (
    <section className=" min-h-[1300px] sm:min-h-[1200px] relative overflow-hidden  pb-10">
      <div className=" container pt-10 flex flex-col lg:flex-row justify-between  gap-10">
        <div className="  basis-[calc(50%-40px)]">
          <div className="max-w-[510px] space-y-[30px]">
            <Image
              width={516}
              height={376}
              quality={80}
              className="relative z-20  object-contaimn rounded-b-lg rounded-tl-lg rounded-tr-[104px]"
              src={"/images/industry_expert.png"}
              alt="tarifalhasan"
            />
            <div className=" space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold leading-[120%] text-content-primary">
                Industry Expertise
              </h2>
              <p className=" text-base lg:text-lg font-normal">
                The mentor finder website connects you with mentors who possess
                extensive industry knowledge and experience. Their expertise
                gives you access to valuable insights, trends, and best
                practices that can accelerate your growth and help you stay
                ahead in your chosen field.
              </p>
            </div>
          </div>
        </div>
        <div className="  basis-[calc(50%-40px)]">
          <div className="max-w-[510px] mt-[40px] sm:mt-[150px] lg:mt-[400px] ml-auto space-y-[30px]">
            <div className=" space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold leading-[120%] text-content-primary">
                Career Development
              </h2>
              <p className=" text-base lg:text-lg font-normal">
                Whether you&apos;re a student seeking guidance on educational
                paths or a professional looking to advance your career, Guiding
                Paths mentors can offer valuable advice on skill development,
                career planning, and job search strategies. They can provide
                feedback on resumes, conduct mock interviews, and share insider
                tips to help you succeed.
              </p>
            </div>
            <Image
              width={516}
              height={376}
              quality={80}
              className="o relative z-20 object-contaimn  rounded-t-lg rounded-bl-[104px]  rounded-br-lg "
              src={"/images/carrier_development.png"}
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

export default Features;
