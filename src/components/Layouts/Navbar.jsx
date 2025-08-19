import React from 'react'
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-white border-b border-gray-200 shadow-sm backdrop-blur-[12px] py-3 px-6 md:px-8 sticky top-0 z-30
'>
        <div className='container mx-auto flex items-center justify-between gap-5'>
          <Link to='/dashboard'>
          <h2 className='text-lg md:text-xl font-medium text-black leading-5'>
            Interview Preparation Using Generative AI
          </h2>
          </Link>

          <ProfileInfoCard/>
        </div>
    </div>
  )
}

export default Navbar