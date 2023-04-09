import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imag from "../src/assets/2.jpg";
import Navbar from './Navbar';
// import Footer from './Footer';

const Home = () => {
       const [RoomCode,setRoomCode]=useState("");
       const navigate=useNavigate();
         
       const submitCode=(e)=>{
                    e.preventDefault();
                    navigate(`/room/${RoomCode}`)
       }


  return (
   <div className=''>
   <div >
               {/* <div className=' h-[5rem] bg-black ' > </div> */}
               <Navbar/>
  
  
           <div className='relative' >

   
              <div className='  w-full absolute  flex overflow-hidden  '  >
                  <img src= {imag}  className='  object-cover w-full  h-full  '  />
              </div>


              <div className='z-10 relative  ' >

               <form action="" onSubmit={submitCode} className='flex flex-col items-center  justify-center' >
               <label htmlFor="" className='mt-8 font-bold text-[32px] pt-12' >Enter your meeting Id :</label> 
                <input type="text" placeholder='Enter your Id Here' required className='bg-blue-500 placeholder:text-white py-1 w-[16rem] rounded-full pl-8 mt-3'
                value={RoomCode}
                onChange={(e)=>setRoomCode(e.target.value)}    />
       
                 <button type='submit' className='bg-orange-500 rounded-[5px] py-1 mt-4 px-4 font-bold ' > Join The Meeting  </button> 
                  </form>

               </div>

           </div>
           {/* <div className=' h-[5rem] bg-black ' > </div>
           <Footer/> */}

      </div>
     
       
    
    </div>

  )
}

export default Home;