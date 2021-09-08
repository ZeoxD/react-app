import React from 'react'
import DropDownItem from './DropDownItem'
import { FaPlus } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import logo from './logo.svg'

function DropDownMenu() {
    return (
        <div className="dropdown">
            <DropDownItem leftIcon={<img src={logo} className="profile-logo"></img>} >My Profile</DropDownItem>
            <DropDownItem leftIcon={<FaPlus/>} rightIcon={<FaArrowRight/>}>
                Other Tasks
            </DropDownItem>
            <DropDownItem leftIcon={<FaPlus/>}>
                Other Tasks
            </DropDownItem>
            <DropDownItem leftIcon={<FaPlus/>} rightIcon={<FaArrowRight/>}>
                Other Tasks
            </DropDownItem>

        </div>
    )
}

export default DropDownMenu