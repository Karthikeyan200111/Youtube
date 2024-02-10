import React from 'react';
import { categories } from '../Utils/constant';

const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <div className='flex md:flex-col flex-row w-full overflow-y-auto md:h-[95%] h-20'>
      
      {categories.map((category) => (
          <button 
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
          onClick={()=>setSelectedCategory(category.name)}
          className='md:px-5 px-2 mx-1 py-1 md:py-2  border-black border-2 border-solid my-3 w-4/5 rounded-lg text-center flex items-center justify-center gap-2 hover:bg-slate-300'>
            <span className='mx-1 text-black text-sm'>{category.icon}</span>
            <span className='font-bold md:text-lg text-black text-sm'>{category.name}</span>
          </button>
        ))}
      
      </div>
        
  
  );
}; 

export default SideBar;
