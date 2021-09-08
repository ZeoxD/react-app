import React from 'react'
import NavbarMain from './NavbarMain';
import NavItem from './NavItem';
import DropDownMenu from './DropDownMenu';
import { FaPlus } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';


function Navbar() {
    return (
        <div className="App-navbar">
            <NavbarMain>
                <NavItem icon={ <FaPlus/> } />
                <NavItem icon={ <FaStarHalfAlt/> } />
                <NavItem icon={ <FaBell/> } />
                
                <NavItem icon={ <FaCog/> }>
                
                    <DropDownMenu/>

                </NavItem>
            </NavbarMain>
        </div>
    )
}

export default Navbar
