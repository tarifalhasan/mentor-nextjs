import image1 from "@/public/images/expert-1.png";
import image2 from "@/public/images/expert-2.png";
import Image from "next/image";
const BeAExpert = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-1 min-h-[1091px] md:min-h-[653px] w-full ">
      <div className="absolute first_image lg:max-w-[180px] xl:max-w-[225px] top-0 left-1/2 transform -translate-x-1/2 translate-y-[-27%] md:left-0 md:transform md:-translate-x-0  md:-translate-y-1/2 md:top-1/2 md:rotate-0 rotate-90">
        <Image src={image1} alt="" className="w-full" />
      </div>
      <div className="absolute secont_image lg:max-w-[180px] xl:max-w-[225px] top-1/2 right-1/2 md:right-0  transform translate-y-[44%] md:-translate-y-1/2 rotate-90 md:rotate-0    translate-x-1/2 md:-translate-x-0">
        <Image src={image2} alt="" className=" w-full" />
      </div>

      <div className="absolute w-full max-w-[650px] xl:max-w-[777px]   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className=" space-y-5">
          <h2 className=" text-center text-5xl text-white">
            Be A Expert And <b>Make Money!</b>
          </h2>
          <p className=" text-lg text-center font-normal text-white">
            Join our thriving community of mentors and start making a meaningful
            impact while creating an additional income stream. Embrace the
            fulfillment of guiding others toward success while reaping the
            benefits of your expertise and dedication as a mentor.
          </p>
          <div className="flex justify-center">
            <button className=" text-white btn-outline">Become a Mentor</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeAExpert;
