import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import Mobilenav from '../components/Mobilenav'

const AllFlats = () => {
  return (
    <div>
      <Navbar />
      <Mobilenav />
      <Cards />
      <Contactus />
      <div className='space'></div>
      <Footer />
    </div>
  )
}

export default AllFlats
