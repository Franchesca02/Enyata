import React from "react";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Shanks from '../../Assets/shanks.png'

const PeopleItem = () => {
  return (
    
    <DefaultLayout>
      <Navbar />
      <div className="flex px-4 py-4">
     <div>
        <img src={Shanks} alt="a cover icon" />
     </div>
     <div className="mt-6 px-6">
        <h1 className="text-2xl font-bold py-2">Shank Comics</h1>
        <p className="text-base font-medium text-[#434854]">Gender: Female</p>
        <p className="text-base font-medium text-[#434854]">Year of Birth: January 24, 1922</p>
        <p className="text-base font-medium text-[#434854]">Skin Color: Brown</p>
        <p className="text-base font-medium text-[#434854]">Height: 150cm</p>
     </div>
      </div>
    </DefaultLayout>
  );
};

export default PeopleItem;
