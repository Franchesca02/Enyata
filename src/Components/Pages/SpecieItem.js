import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Wookie from '../../Assets/wookie.png'

const SpecieItem = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    return axios.get("https://swapi.dev/api/films/").then((response) => {
      setPeople(response?.data?.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
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
