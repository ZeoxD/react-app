import React from 'react'
import DropDownItem from './DropDownItem'

function DropDownNotifications(props) {

    return (
        <div className="dropdown">
            <DropDownItem leftIcon={props.leftIcon[0]} rightIcon={props.rightIcon[0]}>
                {props.children[0]}
            </DropDownItem>
            <DropDownItem leftIcon={props.leftIcon[1]} rightIcon={props.rightIcon[1]}>
                {props.children[1]}
            </DropDownItem>
            <DropDownItem leftIcon={props.leftIcon[2]} rightIcon={props.rightIcon[2]}>
                {props.children[2]}
            </DropDownItem>
            <DropDownItem leftIcon={props.leftIcon[3]} rightIcon={props.rightIcon[3]}>
                {props.children[3]}
            </DropDownItem>
        </div>
    )
}

export default DropDownNotifications