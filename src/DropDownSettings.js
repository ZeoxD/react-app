import React from 'react'
import DropDownItem from './DropDownItem'
import { FaPlus, FaUser, FaArrowRight } from 'react-icons/fa'

function DropDownSettings() {
    return (
        <div className="dropdown">
            <DropDownItem leftIcon={<FaUser/>} >My Profile</DropDownItem>
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

export default DropDownSettings