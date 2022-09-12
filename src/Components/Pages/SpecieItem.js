import React from "react";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Wookie from '../../Assets/wookie.png'

const SpecieItem = () => {
  return (
    
    <DefaultLayout>
      <Navbar />
      <div className="flex px-4 py-4">
     <div>
        <img src={Wookie} alt="a cover icon" />
     </div>
     <div className="mt-6 px-6">
        <h1 className="text-2xl font-bold py-2">Wookie</h1>
        <p className="text-base font-medium text-[#434854]">Designation: Sentient</p>
        <p className="text-base font-medium text-[#434854]">Language: Shyriiwook</p>
        <p className="text-base font-medium text-[#434854]">Eye Colors: Blue, Green, Yellow</p>
        <p className="text-base font-medium text-[#434854]">Average Lifespan: 400</p>
     </div>
      </div>
    </DefaultLayout>
  );
};

export default SpecieItem;
