import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>
        {/* <div className="navbar">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="buttons">
                <button id='signup'>SignUp</button>
                <button id='login'>Login</button>
            </div>
        </div> */}

        <header>
            <a href="#">LOGO</a>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header