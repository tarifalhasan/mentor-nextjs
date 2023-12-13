import { IPopularExpertMentors } from "../PopularExpertMentors";

const PopularExpertsCard = ({
  category,
  name,
  id,
  images,
  slug,
}: IPopularExpertMentors) => {
  return (
    <div
      style={{
        backgroundImage: `url(${images})`,
      }}
      className=" bg-contain  rounded-lg  overflow-hidden bg-no-repeat relative m-0 p-0 w-full lg:max-w-[407px] h-[414px]"
    >
      <div className="  z-50 p-5 absolute bottom-0 space-y-2">
        <h2
          style={{
            textShadow: "0px 4px 20px rgba(0, 0, 0, 0.35)",
          }}
          className=" text-2xl text-white font-medium"
        >
          {name}
        </h2>
        <h4
          style={{
            textShadow: "0px 4px 20px rgba(0, 0, 0, 0.35)",
          }}
          className="text-lg font-normal text-white"
        >
          {category}
        </h4>
      </div>
      <div className=" z-10 absolute w-full h-[236px] bg-g5 bg-no-repeat bg-contain bottom-0"></div>
    </div>
  );
};

export default PopularExpertsCard;
