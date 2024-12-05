import UnderlinedText from "../UnderlinedText";

const CaseStudiesTitleText = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex">
        <p className="z-20  text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          {"Recent"}
        </p>
        <UnderlinedText text={"Projects"} additionalStyles="ml-2 flex lg:hidden" />
      </div>
      <UnderlinedText
        text={"Projects"}
        additionalStyles="lg:flex hidden ml-3"
      />
    </section>
  );
};

export default CaseStudiesTitleText;
