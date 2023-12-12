import { DEFAULT_CATEGORES_DATA } from "@/constants/categories";
import { GoArrowRight } from "react-icons/go";

const Categories = () => {
  return (
    <section className=" container pt-12">
      <div className=" flex-col flex sm:flex-row gap-4 sm:items-center justify-between">
        <h2 className=" heading-3">Expert Categories</h2>
        <button className=" inline-flex items-center gap-x-2">
          <span className=" text-xl font-normal text-brand-main">
            All Categories
          </span>
          <GoArrowRight className=" w-6 h-6 text-brand-main" />
        </button>
      </div>
      <div className=" py-10 grid gap-[30px]  sm:grid-cols-2 xl:grid-cols-4">
        {DEFAULT_CATEGORES_DATA.map((category, i) => (
          <div
            className="  px-6 cursor-pointer space-y-2 rounded-lg border border-[#CECECE] py-6"
            key={category.id}
          >
            <div className="flex   items-center  gap-x-2">
              {category.icon}
              <h3 className=" text-2xl text-content-primary">
                {category.name}
              </h3>
            </div>
            <h4 className=" text-lg font-normal text-content-tertiary">
              {category.total_mentor}320 Mentors
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
