import React from 'react'
import logo from './logo.svg'

function NavbarMain(props) {
    return (
        <nav className="navbar">
            <a href="#" className="icon-logo"><img src={logo} className="img-logo"></img> </a>
            <ul className="navbar-nav">{ props.children }</ul>
        </nav>
    )
}

export default NavbarMain
