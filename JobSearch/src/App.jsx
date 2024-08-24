import { useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Heade'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer/>
   </>
  )
}

export default App
