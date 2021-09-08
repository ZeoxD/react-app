import React from 'react'

function NavbarMain(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{ props.children }</ul>
        </nav>
    )
}

export default NavbarMain
