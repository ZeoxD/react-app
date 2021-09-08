import React from 'react'
import {useState} from 'react'

function NavItem(props) {
    const[open, setState] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={()=>{setState(!open)}}>
                { props.icon }
            </a>

            {open && props.children}
        </li>
    )
}

export default NavItem