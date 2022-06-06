import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>LMNFA</h1>
                <p>your reliable travel guide</p>
                <div>
                    {/* <Link to='/' className='btn'></Link> */}
                    <Link to='/contact' className='btn btn-light'>Induction</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
