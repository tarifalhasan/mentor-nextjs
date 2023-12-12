import { MostAsksQuestionData } from "@/constants/MostAsksQuestion";

const MostAsksQuestion = () => {
  return (
    <section className="container pt-10 pb-10">
      <h2 className="heading-3">Most Asked Question</h2>
      <div className="flex pt-10 pb-8 gap-[30px] flex-wrap">
        {MostAsksQuestionData.map((data, index) => (
          <div key={data.id} className="w-full lg:w-[calc(50%-30px)]">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-brand-main"></div>
              <h4 className="text-lg lg:text-xl">{data.question}</h4>
            </div>
            <p className="text-base  pt-2 lg:text-lg font-normal text-content-secondary">
              {data.answare}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostAsksQuestion;
