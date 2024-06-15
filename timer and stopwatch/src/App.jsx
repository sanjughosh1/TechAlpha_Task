import { useState } from 'react'
import Navbar from "./componends/navbar.jsx";
import Stopwatch from "./componends/Stopwatch.jsx"
import Footer from "./componends/footer.jsx"



function App() {
  const [count, setCount] = useState(0)

  return (
   
  <>
   <div className='h-full w-full bg-purple-400'>
    <Navbar/>
    <div>
    <Stopwatch/>
    </div>
    <Footer/>
   </div>
  </>

  )
}

export default App
