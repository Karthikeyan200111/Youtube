import React from 'react'
import { Link } from 'react-router-dom'

import Search from './Search'
import { BiSolidVideos } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='flex place-content-between sticky bg-black '>
      <Link to='/'>
        {/* <img src={logo} alt='logo' className='md:h-20 p-4 pt-3 h-15 w-20'/> */}
        <div className="md:w-80 flex items-center ">
            <BiSolidVideos className=" w-20 h-20 p-5  md:p-3 text-red-500" />
            <p className="font-bold text-white uppercase text-xl hidden md:contents" >TubeStream</p>
          </div>
      </Link>
      <Search />
     
    </div>
  )
}

export default Navbar