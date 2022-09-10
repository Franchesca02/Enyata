import React from 'react'
import Navbar from '../../UI/Molecules/Navbar'
// import Table from '../../UI/Organisms/Table'
import Dashboard from '../Templates/Dashboard'

const Species = () => {
  return (
    <div name="starship" className='h-[982px]'>
<div className='flex'>
    <div><Dashboard /></div>
      <div className=''>
        <div><Navbar /></div>
      </div>
     
      {/* <div>
        <Table/>
      </div> */}
      </div>
    
      <h1 className='text-7xl text-red-600 font-bold'>Species</h1>
        </div>
  )
}

export default Species