import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.scss'


const Brand = () => {
  return (
    <div className='main_brand section_padding'>
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='slack'/>
      </div>
      <div>
        <img src={atlassian} alt='atlassian'/>
      </div>
      <div>
        <img src={dropbox} alt='dropbox'/>
      </div>
      <div>
        <img src={shopify} alt='shopify'/>
      </div>
    </div>
  )
}

export default Brand
