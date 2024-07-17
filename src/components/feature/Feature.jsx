import React from 'react'
import './feature.scss'

const Feature = ({ title, text }) => {
  return (
    <div className='main_features-container_feature'>
      <div className='main_features-container_feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='main_features-container_feature-text'>
        <p>{text}</p>
      </div>
      
    </div>
  )
}

export default Feature
