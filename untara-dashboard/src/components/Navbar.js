import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const logout = () => {
        localStorage.clear()

    }
    return (
        <>
        <nav className="navbar bg-danger shadow">
        <div className="navbar-logo">
            <Link to="/">
                <img src={Logo} alt="logo" style={{width: "5vw"}}></img>
            </Link>
        </div>
        <div className="navbar-right">
            <Link to="/login">
                <button onClick={logout}>Logout</button>
            </Link>
        </div>

        </nav>
        </>
    )
}

export default Navbar