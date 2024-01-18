import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

const AllFlats = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Contactus />
      <div className='space'></div>
      <Footer />
    </div>
  )
}

export default AllFlats
