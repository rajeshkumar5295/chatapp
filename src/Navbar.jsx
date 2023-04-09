import React from 'react';
import logo from "../src/assets/z1.png";


const Navbar = () => {
  return (
    <div className='bg-black/90' >
    <div className='bg-black h-[6rem] flex items-center justify-between px-4  md:max-w-[90] mx-auto  ' >
      
      <div className=' flex items-center ' > 

      <div className=' flex w-[3rem] h-[3rem] bg-white rounded-full '  > 
       <img src={logo} alt="logo"  className='object-cover '  />   </div>
     
          <div className='text-white font-bold '  >
            <p className='text-[21px] pl-2 ' >  Video Call App </p>
          </div>

      </div>

      <div  className='' >
        <ul className='text-white  font-bold flex item-center gap-4 ' > 
          <li>About Us</li>
          <li>Product</li>
          <li>Blogs</li>
        </ul>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar;