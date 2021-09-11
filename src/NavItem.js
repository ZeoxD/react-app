import React from 'react'
import {useState} from 'react'

function NavItem(props) {
    const [open, setState] = useState(false)
    return (
        <li className={props.class}>
            <a
                href="#"
                className="icon-button"
                onClick={() => {
                    setState(open => !open);
                    props.onAdd?.();
                }}
                style={{backgroundColor: props.color}}
            >
                {props.icon || props.logo}
            </a>

            {open && props.children}
        </li>
    )
}

export default NavItem