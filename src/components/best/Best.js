import React from 'react'

import apt1 from '../../assets/apt1.jpeg'
import apt2 from '../../assets/apt2.jpeg'
import apt3 from '../../assets/apt3.jpeg'

import './Best.css'

const Best = () => {
  return (
    <div className='best'>
        <h1>Find Best Rated Properties</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercials</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>
        <div className='container'>
            <img src={apt1} alt='' />
            <img src={apt2} alt='' />
            <img src={apt3} alt='' />
        </div>
        <button className='btn'>View All</button>

    </div>
  )
}

export default Best