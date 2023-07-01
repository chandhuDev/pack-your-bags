import React from 'react'
import '../css/imageAnime.css'
import { Navigate } from '../Utils/Images'
import backgroundImage from '../assests/background-text.webp'
import Meghalaya from '../../src/assests/Meghalaya.webp'
import Varanasi from '../../src/assests/Varanasi.webp'
import Chikmagulur from '../../src/assests/Chikmagalur.webp' 
import Rann_of_Kutch from '../../src/assests/Rann-of-Kutch.webp'


const Home = () => {
   const navigate=Navigate()
  
   function moveToProduct(){
    navigate("/product")
   }

return (
    <>
    <div className="flex flex-row justify-evenly w-full h-128 md:mt-20 mt-10 ">
     <div className="flex items-start pt-20 relative flex-col md:w-128 w-64 h-full overflow-hidden">
        <div className='flex md:text-4xl text-2xl font-bold border-red-400 wrapper md:ml-24'>
         <p>More you </p>
         <div className='words'>
            <span className='roll md:pl-[10px] pl-1'>see</span>
            <span className='roll md:mr-2 md:pl-[10px] px-1'>love</span>
         </div>
         <p>it</p>
        </div>
        <div className='w-full relative h-40 flex justify-center items-center bg-white'>
           <p className='md:text-4xl text-2xl font-bold px-0.5 py-2 special-class text-center uppercase' style={{backgroundImage:`url(${backgroundImage})`}}>Explore the beautiful world around <span className=' span-class'>you!</span></p>
        </div>
        <div className='absolute md:bottom-12 bottom-4 w-auto h-auto bg-black  rounded-md cursor-pointer md:ml-32 ml-12 font-mono md:text-2xl text-lg font-semibold' >
        <button className='md:py-3 md:px-4 p-2 bg-indigo-800/95 text-center rounded-md  hover:duration-300 transition ease-in-out hover:-translate-y-2 hover:-translate-x-2 hover:delay-150 hover:text-teal-100 text-white' onClick={moveToProduct}>View Products {'->'}</button>
        </div>
     </div>
     <div className="grow h-full relative ">
      <div className='absolute md:top-1/4 top-32 right-2 md:right-128 z-10 md:h-3/5 md:w-2/6 h-32 w-28 bg-purple-400 rounded-full bg-cover md:border-4 border-2 border-indigo-500/75 anime' style={{backgroundImage:`url(${Meghalaya})`}}>
      </div>
      <div className='absolute md:top-12 md:right-64 top-64 right-4 md:h-64 md:w-64 h-24 w-20 bg-yellow-400/40 rounded-full bg-cover md:border-4 border-2 border-indigo-500/75 anime' style={{backgroundImage:`url(${Varanasi})`}}>
      </div>
      <div className='absolute top-4 right-10 md:h-60 md:w-60 w-28 h-28 bg-green-400/70 rounded-full bg-cover md:border-4 border-2 border-indigo-500/75 anime' style={{backgroundImage:`url(${Chikmagulur})`}}>
      </div>
      <div className='absolute md:bottom-4 bottom-20 right-16 md:right-24 md:h-48 md:w-48 w-24 h-24 bg-gray-500/70 rounded-full bg-cover md:border-4 border-2 border-lime-300/75 anime' style={{backgroundImage:`url(${Rann_of_Kutch})`}}>
      </div>
     </div>
   </div>
    </>
  )
}

export default Home


