import React from 'react'
import NavbarMain from './NavbarMain';
import NavItem from './NavItem';
import DropDownNotifications from './DropDownNotifications';
import DropDownSettings from './DropDownSettings';
import DropDownStars from './DropDownStars'
import { FaPlus, FaUser, FaArrowRight,FaSignOutAlt,FaQuestionCircle } from 'react-icons/fa';
import { FaStarHalfAlt,FaMoon, FaTasks } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';



function Navbar(props) {

    var Stars = [];
    var n = 0;
    for (n in props.tasks) 
    {
        if(props.tasks[n].reminder === true)
        {
             Stars[n] = props.tasks[n].text; 
        }
    }
    const starsLeftIcon = <FaTasks/>;
    const Notifications = ["Notifications","Running","Movie","Park"];
    const notificationsLeftIcon = [<FaBell/>,<FaPlus/>,<FaPlus/>,<FaPlus/>];
    const notificationsRightIcon = ['', <FaArrowRight/>, '', <FaArrowRight/>];
    const Settings = ["My Profile","Display","Support","Sign Out" ];
    const settingsLeftIcon = [<FaUser/>,<FaMoon/>,<FaQuestionCircle/>,<FaSignOutAlt/>];
    const settingsRightIcon = ['', <FaArrowRight/>, <FaArrowRight/>, ''];
    const noIcon = [''];

    return (
        <div className="App-navbar">
            <NavbarMain>
                <NavItem 
                    class="nav-item" 
                    icon={ <FaPlus/> } 
                    color={ props.showAdd ? '#580000' : '#004d00' } 
                    onAdd={props.onAdd} 
                />
                
                <NavItem class="nav-item" icon={ <FaStarHalfAlt/> } >
                    <DropDownStars leftIcon={starsLeftIcon}>
                        {Stars}
                    </DropDownStars>
                </NavItem>

                <NavItem class="nav-item" icon={ <FaBell/> }  >
                    <DropDownNotifications leftIcon={notificationsLeftIcon} rightIcon={notificationsRightIcon}>
                        {Notifications}
                    </DropDownNotifications>
                </NavItem>
                
                <NavItem class="nav-item" icon={ <FaCog/> } >
                    <DropDownSettings leftIcon={settingsLeftIcon} rightIcon={settingsRightIcon} userLog={props.userLog} >
                        {Settings}
                    </DropDownSettings>
                </NavItem>
            </NavbarMain>
        </div>
    )
}

export default Navbar
