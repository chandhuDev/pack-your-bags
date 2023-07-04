import React,{useState,useRef,useEffect} from 'react'
import {motion} from 'framer-motion'
import images from '../Utils/Images'
const Places = () => {
      const [width,setWidth]=useState(0)
      const carouselWidth=useRef()
      useEffect(()=>{
         setWidth(carouselWidth.current.scrollWidth-carouselWidth.current.offsetWidth)
      },[])
      
return (
    <>
     <div className='flex flex-col  justify-center gap-y-2 mt-6 md:mb-20 mb-10 w-full'>
       <h2 className='text-center font-bold text-3xl mt-2'>Places</h2>
       <motion.div className='md:mx-24 mx-8 overflow-x-hidden' ref={carouselWidth}>
       <motion.div  drag='x' dragConstraints={{right:0,left:-width}}  whileTap={{cursor:'grabbing'}} className='flex flex-row items-center'>
               {
                images.map((image)=>{
                  return (
                  <motion.div className='min-w-fit min-h-fit p-6 overflow-hidden group' key={image}>
                    <motion.div className='relative transition shadow-xl ease-in hover:-translate-y-1 hover:scale-105 group duration-300 cursor-pointer'>
                       <img src={image.url} alt={image.name} className='md:w-[240px] md:h-[240px] w-[180px] h-[200px] rounded-md  pointer-events-none  '/>
                       <motion.div className="absolute duration-300 bg-black/60 text-white text-center text-xl font-semibold w-full md:h-1/4 h-[28%] group-hover:-translate-y-14 rounded-br-md rounded-bl-md group-hover:inline-block hidden">
                             {image.name}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  )
                })
               }
        </motion.div>
       </motion.div>
      </div>
    </>
  )
}

export default Places
