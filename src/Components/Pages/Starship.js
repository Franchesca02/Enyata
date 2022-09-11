import React, { useEffect, useState } from "react";
import axios from "axios";
import DefaultLayout from "../Templates/layout";
import Navbar from "../../UI/Molecules/Navbar";
import Cards from "../../UI/Organisms/Cards";

const Starship = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    return axios.get("https://swapi.dev/api/starships/").then((response) => {
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
      <div className="px-6 my-2 ">
        <p className="text-base font-normal text-[#A4A7B7] py-8">Starships</p>
        <div className="overflow-x-auto sm:overflow-x-scroll relative shadow-md sm:rounded-lg">
          {loading ? (
            <div className="text-center flex justify-center items-center">
              LOADING.....
            </div>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6 text-base font-medium">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Model
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Class
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Passenger
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Length
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Character
                  </th>
                </tr>
              </thead>
              <tbody>
                {people &&
                  people.map((item) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item?.name}
                      </th>
                      <td className="py-4 px-6">{item?.name}</td>
                      <td className="py-4 px-6">{item?.model}</td>
                      <td className="py-4 px-6">{item?.edited}</td>
                      <td className="py-4 px-6">{item?.passengers}</td>
                      <td className="py-4 px-6">{item?.length}</td>
                      <td className="py-4 px-6">{item?.character}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Starship;
