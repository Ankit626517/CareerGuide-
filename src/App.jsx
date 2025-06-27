import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import ExploreCareer from './Component/Explore'

import CareerTest from './component/CareerTest'
import Footer from './Pages/Footer'
import Education from './Component/Educations'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <BrowserRouter>
    <Navbar />
    <div className='pt-16'>    <Routes >
      
      <Route path="/" element={<Home />} />
      <Route path="/explore-career" element={<ExploreCareer />} />
      <Route path="/education" element={<Education />} />
      <Route path="/career-test" element={<CareerTest />} />

    </Routes>
    </div>
<Footer />
  </BrowserRouter>
   </>
  )
}

export default App
