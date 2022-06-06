import React from 'react'
import './ServiceStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.webp'

const Service = () => {
    return (
        <div className='service'>
            <div className='left'>
                <h1>Service</h1>
                <p>Thorough service is a necessity when traveling to Earth.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service

