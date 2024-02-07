import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Pros from '../components/Pros'
import Slider2 from '../components/Slider2'
import Slider3 from '../components/Slider3'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Pros/>
        <Slider2/>
        <Slider3/>
        <Footer/>
    </div>
  )
}

export default Homepage