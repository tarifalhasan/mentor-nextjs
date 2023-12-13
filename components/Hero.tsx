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
        <h2 className="heading-2 ">
          Your One-Stop Platform for Expert{" "}
          <span className="  relative   inline-block">
            Consultations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={297}
              height={11}
              viewBox="0 0 297 11"
              fill="none"
              className="  absolute -bottom-1"
            >
              <path
                d="M64.64 2.23986C92.8518 1.91769 121.079 1.71057 149.306 1.61852C177.533 1.52647 205.5 1.55716 233.589 1.7029C249.545 1.78728 265.517 1.90234 281.473 2.05576L283.639 0.483237C247.211 0.797741 210.798 1.18895 174.385 1.65688C137.972 2.1248 101.56 2.66943 65.1468 3.29844C44.7059 3.6513 24.2803 4.0195 3.83937 4.41838C2.64148 4.4414 0.844649 4.59481 0.168916 5.1778C-0.460744 5.72243 0.706431 6.00625 1.67396 5.99091C39.6225 5.50764 77.6018 5.46162 115.566 5.8605C153.53 6.25939 191.463 7.11085 229.35 8.39955C250.635 9.12062 271.906 9.98742 293.145 10.9923C294.297 11.046 296.201 10.7622 296.816 10.2329C297.491 9.65757 296.232 9.45813 295.311 9.41978C257.516 7.63247 219.629 6.2824 181.711 5.37724C143.793 4.47208 105.814 4.0195 67.8497 4.01183C46.5181 4.01183 25.1864 4.14223 3.85473 4.41838L1.68932 5.99091C38.0868 5.27752 74.4995 4.64851 110.912 4.08854C147.325 3.53623 183.738 3.05297 220.151 2.65409C240.592 2.43163 261.048 2.22452 281.489 2.04809C282.687 2.04042 284.499 1.86399 285.159 1.28868C285.82 0.713362 284.606 0.483237 283.654 0.475566C255.412 0.214757 227.2 0.0536689 198.973 0.0153147C170.745 -0.0230396 142.779 0.0459981 114.69 0.237769C98.7338 0.345161 82.7619 0.490907 66.8054 0.675008C65.6075 0.69035 63.7953 0.859108 63.1349 1.43442C62.5053 1.97905 63.6725 2.26287 64.64 2.24753V2.23986Z"
                fill="#46B312"
              />
            </svg>
          </span>{" "}
          and Mentorship
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
