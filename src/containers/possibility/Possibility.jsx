import React from 'react'
import './possibility.scss'

import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='main_possibility' id='possibility'>
      <div className='main_possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='main_possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
      
    </div>
  )
}

export default Possibility
