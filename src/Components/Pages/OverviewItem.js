import React from "react";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Cover from '../../Assets/cover.png'

const Overview = () => {
  return (
    
    <DefaultLayout>
      <Navbar />
      <div className="flex px-4 py-4">
     <div>
        <img src={Cover} alt="a cover icon" />
     </div>
     <div className="mt-6 px-6">
        <h1 className="text-2xl font-bold py-2">Cover</h1>
        <p className="text-base font-medium text-[#434854]">Director: Kingsley Omin</p>
        <p className="text-base font-medium text-[#434854]">Producer: Kingsley Omin</p>
        <p className="text-base font-medium text-[#434854]">Release Date: January 24, 2022</p>
     </div>
      </div>
    </DefaultLayout>
  );
};

export default Overview;
