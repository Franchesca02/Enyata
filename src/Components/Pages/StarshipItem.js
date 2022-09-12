import React from "react";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Star from '../../Assets/star.png'

const StarshipItem = () => {
  return (
    
    <DefaultLayout>
      <Navbar />
      <div className="flex px-4 py-4">
     <div>
        <img src={Star} alt="a cover icon" />
     </div>
     <div className="mt-6 px-6">
        <h1 className="text-2xl font-bold py-2">Death Star</h1>
        <p className="text-base font-medium text-[#434854]">Model: DS-1 Orbital Battle Station</p>
        <p className="text-base font-medium text-[#434854]">Passengers: 22</p>
        <p className="text-base font-medium text-[#434854]">Pilots: Dior, Kingsley Jamal</p>
     </div>
      </div>
    </DefaultLayout>
  );
};

export default StarshipItem;
