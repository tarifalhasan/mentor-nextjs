import { StarIcon, TrophyIcon } from "@/assets/svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className=" pt-7 container  content-center justify-between   flex items-center">
      <div className=" lg:max-w-[55%] space-y-[24px]">
        <div className=" inline-flex items-center gap-x-2">
          <TrophyIcon />
          <p className=" text-lg font-normal text-content-primary">
            Be Best In Your Major
          </p>
        </div>
        <h2 className="heading-2">
          Your One-Stop Platform for Expert Consultations and Mentorship
        </h2>
        <p className=" text-lg font-normal  text-content-tertiary opacity-70">
          BookConnect provides a convenient platform for individuals and <br />
          businesses to easily book time with experts, mentors, and influencers{" "}
          <br />
          from diverse fields.
        </p>
        <div className=" inline-flex items-center gap-x-1">
          <StarIcon />
          <p className=" text-base font-medium text-content-primary">
            4.92/5 Rating (1000s of calls)
          </p>
        </div>
        <div className=" flex items-center gap-x-6">
          <button className="  btn-primary">
            Find A Mentor
            <FaArrowRight />
          </button>
          <button className="btn-outline">Become a Mentor</button>
        </div>
      </div>
      <div className=" hidden lg:block">
        <Image width={525} height={252} alt="hero" src={"/hero.png"} />
      </div>
    </section>
  );
};

export default Hero;
