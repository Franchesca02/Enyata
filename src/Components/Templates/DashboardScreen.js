import React from 'react'
import Navbar from '../../UI/Molecules/Navbar'
import Cards from '../../UI/Organisms/Cards'
import Table from '../../UI/Organisms/Table'

const DashboardScreen = () => {
  return (
    <div name="dashboardscreen" className='h-[982px]'>

<div>
  <Navbar />
  </div>
<div>
  <Cards />
</div>


<div>
  <Table />
</div>

    </div>
  )
}

export default DashboardScreen