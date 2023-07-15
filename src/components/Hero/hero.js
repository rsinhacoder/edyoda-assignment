import React from 'react'
import './hero.css';
import Data from './data';
import Payment from './payment';

const Hero = () => {
  return (
    <div className='mainDiv'>
  <Data/>
  <Payment />
  </div>
  )
}

export default Hero