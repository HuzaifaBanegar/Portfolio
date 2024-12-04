import React from "react";
import UnderlinedText from "../UnderlinedText";

const HeroUnderlinedText = () => {
  return (
    <>
      <div className="relative flex">
        <UnderlinedText
          text="Software Developer"
          header
          additionalStyles="flex mt-2 mb-1.5 md:mt-6 md:mb-5"
        />
       
      </div>
      
    </>
  );
};

export default HeroUnderlinedText;
