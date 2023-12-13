const PeopleLoveUs = () => {
  return (
    <section className="container mb-10">
      <div className=" relative overflow-hidden   border-[5px] border-brand-main rounded-tr-[140px] rounded-bl-[140px]">
        <div
          style={{}}
          className=" bg-no-repeat bg-cover bg-center bg-people-love-us  w-full h-full min-h-[291px]  top-0  grid place-items-center  "
        >
          <h3 className=" text-3xl text-center  lg:text-6xl font-medium text-white">
            People Loves Us
          </h3>
        </div>
        <div className=" py-6 bg-brand-main flex-col gap-y-10 flex lg:flex-row lg:items-center justify-around">
          <div>
            <h3 className="text-6xl text-center font-medium text-white">
              +12K
            </h3>
            <p className=" text-lg text-center text-background_content">
              Registered Mentors
            </p>
          </div>
          <div>
            <h3 className="text-6xl text-center font-medium text-white">+1M</h3>
            <p className=" text-lg text-center text-background_content">
              Online Meets
            </p>
          </div>
          <div>
            <h3 className="text-6xl text-center font-medium text-white">57</h3>
            <p className=" text-center text-lg text-background_content">
              Categories
            </p>
          </div>
        </div>
        <div
          style={{}}
          className=" bg-people-love-us-2 bg-no-repeat bg-cover bg-center w-full h-full min-h-[291px]  top-0  grid place-items-center  "
        >
          <h3 className=" text-3xl text-center  lg:text-6xl font-medium   text-white">
            People Loves Us
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PeopleLoveUs;
