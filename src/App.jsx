import React from 'react'
// import './sass/App.scss'
import './styles/css/App.min.css'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { Cta, Brand, Navbar} from './components'

const App = () => {
  return (
    // add some hovers at least

    // Mobile version doesn't look so good
    // If you want add some pages to buttons and links
    // same page with more animation 
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
