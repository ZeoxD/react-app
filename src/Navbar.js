import React from 'react'
import NavbarMain from './NavbarMain';
import NavItem from './NavItem';
import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import { FaPlus } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';



function Navbar(props) {
    return (
        <div className="App-navbar">
            <NavbarMain>
                <NavItem class="nav-item" icon={ <FaPlus/> } color={ props.showAdd ? '#580000' : '#004d00' } onAdd={props.onAdd} />
                <NavItem class="nav-item" icon={ <FaStarHalfAlt/> }  />
                <NavItem class="nav-item" icon={ <FaBell/> }  >
                    
                    <DropDownNotifications/>
                
                </NavItem>
                
                <NavItem class="nav-item" icon={ <FaCog/> }  >
                 
                    <DropDownSettings/>

                </NavItem>
            </NavbarMain>
        </div>
    )
}

export default Navbar
