import React from 'react'
import DropDownStarsItem from './DropDownStarsItem'

function DropDownStars(props) {

    var DropDownStarsItemGenerator = [];
    var n = 0;

    for(n in props.children )
    {
        DropDownStarsItemGenerator[n] = <DropDownStarsItem leftIcon={props.leftIcon}>
                {props.children[n]}
        </DropDownStarsItem>
    }

    return (
        <div className="dropdown">
            {DropDownStarsItemGenerator}
        </div>
    )
}

export default DropDownStars