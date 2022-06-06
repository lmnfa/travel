import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/Service'

const Service = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='SERVICE.'  />
            <ServiceSection />
            <Footer />
        </div>
    )
}

export default Service
