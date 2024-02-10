import React, { useEffect, useState } from 'react'

import {SideBar,Videos} from '../components'
import { fetchFromApi } from '../Utils/fetchFromApi'

const Feed = () => {

  const[selectedCategory,setSelectedCategory]=useState('New')
  const[videos,setVideos]=useState(null)
  

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
        console.log(data.items)



      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
     

  },[selectedCategory])
  return (
    <div className='flex md:flex-row flex-col'>
      <div className='flex  md:w-1/5 md:h-[92vh] bg-slate-100 p-2'>
        <SideBar selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} />
      </div>
      <div className='md:w-4/5 w-full h-[90vh] overflow-y-auto bg-slate-400 p-2 '>
        <p className='text-red-600 text-3xl font-bold mx-4'> {selectedCategory} <span className='text-white'>Videos</span></p>
        <Videos
        videos={videos}  />
      </div>
    </div>
  )
}

export default Feed