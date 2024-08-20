import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stopwatch from "./componends/Stopwatch.jsx";
import Layout from './componends/layout/layput.jsx';
import Timer from './componends/Timer.jsx';



function App() {


  return (
   
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="timer" element={<Timer />} />
          <Route path="" element={<Stopwatch />} />
        </Route>
      </Routes>
    </Router>
  </>

  )
}

export default App
