import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.scss'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false)


  return (
    <div className='main_navbar'>
      <div className='main_navbar-links'>
        <div className='main_navbar-links_logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='main_navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='main_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='main_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='main_navbar-menu_container scale-up-center'>
            <div className='main_navbar-menu_container-links'>
              <Menu/>
              <div className='main_navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
