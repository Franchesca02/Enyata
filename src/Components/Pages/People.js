import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../UI/Molecules/Navbar'
import Table from '../../UI/Organisms/Table'
import Dashboard from '../Templates/Dashboard'

const People = () => {

  const [people, setPeople] = useState([])
  const fetchData = async () => {
    const { data } = await axios.get("https://swapi.dev/api/people/");
    // console.log(data);
    setPeople(data.results)
  };
	
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  

  return (
    <div name="starship" className='h-[982px] block'>
<div className='flex'>
    <div><Dashboard /></div>
      <div className=''>
        <div><Navbar /></div>
      </div>
      </div>

      <div className='text-blue-700'>
     {people?.map((results) => {
          return ( 
          <ul>
            <li key={results.name}>{results.name}</li>
          </ul>
          )
        })}
        {/* <h1>Render please</h1> */}
     </div>
    
     <div>
        <Table people={people} name={people} />
      </div>
        </div>
  )
}

export default People