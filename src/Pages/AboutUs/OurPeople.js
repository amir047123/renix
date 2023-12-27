import React from "react";
import img1 from "../../Assets/team/founder.png";
import img2 from "../../Assets/team/ceo.png";

const OurPeople = () => {
  return (
    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 sm:grid sm:grid-cols-1 ">
        <div className="  shadow-md  p-2">
          <img class="h-auto max-w-full rounded-lg" src={img1} alt=""></img>
          <h1>Abu Hanif</h1>
          <p className=" text-xs"> Founder And Managing Director</p>
        </div>
        <div className=" p-2 shadow-md ">
          <img class="h-auto max-w-full rounded-lg" src={img2} alt=""></img>
          <h1>Mahadi Hasan</h1>
          <p className=" text-xs"> Chairman & CEO</p>
        </div>
       

        
      
      </div>
    </div>
  );
};

export default OurPeople;
