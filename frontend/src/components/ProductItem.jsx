import React, { useContext, useEffect, useState } from 'react'
import { AppContext,Navigate } from '../Utils/Images'
import { ImageCorousel ,Spinner} from './index'


const ProductItem = () => {
  const [width,setWidth] = useState(window.innerWidth)
  const {product}= useContext(AppContext)
  const navigate=Navigate()
 
  function navigateToDetails(product){
    navigate(`/productDetails/${product.id}`,{
      state:{
        product
      }
    })
  }
 
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



return (
    <>
    <div className='w-full h-auto my-16 md:p-14'>
    { product ?
     product?.map((product)=>{
        return (
       <div className='w-full h-auto mx-auto md:p-10 p-1.5 mt-2 relative' key={product.id} >
            <div className='w-full h-[220px] rounded-md cursor-pointer' onClick={()=>navigateToDetails(product)}>
              <div  className='w-full h-[220px] rounded-md flex flex-row border-2 cursor-pointer shadow-lg transition ease-linear delay-50    duration-300 hover:scale-105'>
              <div className='md:w-2/3 w-3/5 h-full flex flex-col justify-evenly md:justify-evenly'>
                <div>
                  {
                     width >=500 ? 
                      <div className='w-full h-3/5 flex flex-row justify-evenly md:text-lg text-base items-center'>
                        <p className='font-semibold'>Journey Starts at:<span className=' md:text-3xl text-base uppercase md:ml-3 ml-1 items-center font-mono font-normal'>{product.source}</span></p> 
                        <p className='font-semibold'>Ends at:<span className='md:text-3xl text-base uppercase md:ml-3 ml-1 font-mono font-normal'>{product.Destination}</span></p>
                      </div> :  
                      <div className='font-serif w-full'>
                        <p className='w-full text-center'>From - To:</p>
                        <p className='flex flex-row justify-around md:font-semibold text-xs md:text-base'><span>{product.source}</span><span>{product.Destination}</span></p>
                      </div>
                  }
                </div>
                <div className='w-full h-2/5 flex flex-col md:justify-around justify-center'>
                   <div>
                    { width >=500 ? 
                    <div className='w-full h-full flex flex-row justify-evenly items-center'>
                      <p className='font-serif'>StartDate:<span className='md:text-2xl text-sm uppercase md:ml-3 ml-1 items-center font-normal'>{product.startDate}</span></p> 
                      <p className='font-serif'>EndDate:<span className='md:text-2xl text-sm uppercase md:ml-3 ml-1 font-normal'>{product.endDate}</span></p>
                    </div> :  
                    <div className='font-serif w-full mt-2'>
                      <p className='text-lg font-bold w-full text-center'>Date of Journey:</p>
                      <p className='flex semi-bold flex-row justify-around gap-2 text-xs md:text-base'><span>{product.startDate}</span><span>{product.endDate}</span></p>
                    </div>
                    }
                 </div>
                  <div className={`w-full ${width >=500 ? 'h-2/5' : 'h-2/6 mt-5' } flex flex-row justify-center items-center text-lg`}>
                      <p className='font-mono'>Cost : <span className={`ml-2 ${width >=500 ? 'text-xl' : 'text-lg' } font-semibold uppercase bg-fuchsia-500/60 bg-opacity-25 ${width>=500 ? 'p-2' : 'p-1'} rounded-md border-2`}>{product.cost}</span></p>
                   </div>
                </div>
              </div>
              <div className='h-full w-1/3 grow rounded-tr-md rounded-br-md' >
                  <ImageCorousel images={product.imageArray}/>
              </div>
            </div>
          </div>
         
      </div>
    )}) :
    <Spinner message='We are loading the content for you just wait for couple of seconds' className='w-full h-full flex justify-center items-center'/>
    }
    
   
    </div>
  </>
)
}
export default ProductItem

