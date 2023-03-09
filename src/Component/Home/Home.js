import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"
import icon from '../../Image/icon.png'
export default function Home() {
  return (
    <>
      <div className='App'>
        <div className='Heading'><span className='design'>Maintain</span><br /><span className='simple'> Time Table</span></div><br />
        <NavLink to="/Login" className="l">Login</NavLink>
        <NavLink to="/Signup" className="S">Signup</NavLink>
        <div className='body'>
          <div className="hourglass"></div>
        </div>

        <div className='cal'>
                <img src={icon}/>
        </div>
      </div>

    </>
  )
}
