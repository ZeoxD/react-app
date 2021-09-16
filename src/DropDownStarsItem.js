import React from 'react'

function DropDownStarsItem(props) {
    return (
        <a href="#" className="dropdown-item">
            <span className="icon-star-button"> {props.leftIcon} </span>
            {props.children}
        </a>
    )
}

export default DropDownStarsItem
