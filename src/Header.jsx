import React from 'react'
import {Link} from 'react-router-dom'

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/signin">Signin</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header