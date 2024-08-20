import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx"



function Layout() {


  return (
   
  <>
   <div className='h-full w-full bg-purple-400'>
    <Navbar/>
    <div>
    <Outlet/>
    </div>
    <Footer/>
   </div>
  </>

  )
}

export default Layout
