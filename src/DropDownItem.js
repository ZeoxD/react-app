import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function DropDownItem(props) {
    
    const history = useHistory();
    function SignOut() {
        history.push('/SignIn');
    }

    return (
        <a href="#" className="dropdown-item" onClick={()=>SignOut}>
            <span className="icon-button"> {props.leftIcon} </span>
            {props.children}

            <span className="icon-right"> {props.rightIcon} </span>
        </a>
    )
}

export default DropDownItem
