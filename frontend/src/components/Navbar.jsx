import React,{useEffect,useState} from 'react'
import logo from '../assests/logo.jpg'
import {Navigate} from '../Utils/Images'

const Navbar = () => {
  const [JWT,setJWT]=useState(false)
  const navigate=Navigate()
  
  function loginFunction(){
    navigate('/sign-in')
  }
  
 

  function logoutFunction(){
    localStorage.removeItem('JWT')
    navigate('/')
  }
  
  useEffect(()=>{
    if(localStorage.getItem('JWT')){
      setJWT(true)
    }
  },[])

return (
    <>
    <header>
     <nav className="bg-white fixed flex justify-between w-full items-center py-2 grow-0 top-0 left-0 right-0 z-40">
         <div className="flex  items-center flex-auto gap-16">
            <img src={logo} alt="image" className="h-10 object-cover ml-10"/>
         </div>
         { JWT ? <button className="flex flex-start rounded-md md:rounded-lg border-slate-500 md:px-8 px-3 py-1  md:mr-12 mr-5  text-[12] bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300" onClick={logoutFunction}>Logout</button> :
         <button className="flex flex-start rounded-md md:rounded-lg border-slate-500 md:px-8 px-3 font-semibold mr-12 py-1 text-[12] shadow-lg  bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300" onClick={loginFunction}>Login</button>
         }
     </nav>
   </header>
  </>
  )
}

export default Navbar
