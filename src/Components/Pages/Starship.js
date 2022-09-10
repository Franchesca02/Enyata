import React from 'react'
import Navbar from '../../UI/Molecules/Navbar'
import Table from '../../UI/Organisms/Table'
import Dashboard from '../Templates/Dashboard'

const Starship = () => {
  return (
    <div name="starship" className='h-[982px]'>
<div className='flex'>
    <Dashboard />
      <Navbar />
      <Table />
    </div>
    
        </div>
  )
}

export default Starship