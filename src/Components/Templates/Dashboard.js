import React from 'react'
import Logo from '../../Assets/logo.png'
import Grid from '../../Assets/grid.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div name='dashboard' className='h-[982px]'>
         <div className="bg-[#031434] w-[272px] h-full px-10">
        <div className="relative top-[25px] py-6">
          <img
            src={Logo}
            alt="An icon of the star war movie"
            className="w-[107px] h-[46px] mx-auto"
          />
        </div>
        <div className='my-10'>
        <div className='flex justify-around bg-[#0A74DC] items-center w-[195px] h-[48px] mx-auto rounded my-2'>
          <div>
            <img src={Grid} alt="A grid icon" />
          </div>
          <div className='text-white font-semi-bold text-base'>
            <Link to='/Overview'><p>Overview</p></Link>
          </div>
        </div>

        <div className='flex justify-around items-center w-[195px] h-[48px] mx-auto rounded mt-8'>
          <div className='w-[17px] h-[16px] rounded bg-[#A9C1FF]'>
          </div>
          <div className='text-white font-semi-bold text-base'>
            <Link to='/Starship'><p>Starships</p></Link>
          </div>
        </div>

        <div className='flex justify-around items-center w-[195px] h-[48px] mx-auto rounded mt-2'>
          <div className='w-[17px] h-[16px] rounded bg-[#FFA9EC]'>
          </div>
          <div className='text-white font-semi-bold text-base'>
            <p>People</p>
          </div>
        </div>

        <div className='flex justify-around items-center w-[195px] h-[48px] mx-auto rounded mt-2'>
          <div className='w-[17px] h-[16px] rounded bg-[#FDFFA9]'>
          </div>
          <div className='text-white font-semi-bold text-base'>
            <p>Species</p>
          </div>
        </div>

      </div>
      </div>
      
    </div>
  )
}

export default Dashboard