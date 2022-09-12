import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Shanks from '../../Assets/shanks.png'

const PeopleItem = () => {
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
