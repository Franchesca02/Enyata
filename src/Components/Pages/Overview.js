import React from 'react'
import Dashboard from '../Templates/Dashboard'
import DashboardScreen from '../Templates/DashboardScreen'

const Overview = () => {
  return (
    <div className='flex flex-wrap'>
        <div>
            <Dashboard />
           
        </div>
        <div>
        <DashboardScreen />
        </div>
        
    </div>
  )
}

export default Overview