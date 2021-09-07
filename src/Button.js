import React, {useState} from 'react'

const Button = ({text, color, onClick}) => {
    
    const [newcolor, setColor] = useState('#8c8c8c')
    
    return (
        <button className="add-btn" onClick = {onClick}  style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

export default Button