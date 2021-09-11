import React from 'react'
import DropDownItem from './DropDownItem'
import { FaPlus, FaBell } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import logo from './logo.svg'

function DropDownNotifications() {
    return (
        <div className="dropdown">
            <DropDownItem leftIcon={<FaBell/>} >Notifications</DropDownItem>
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

export default DropDownNotifications