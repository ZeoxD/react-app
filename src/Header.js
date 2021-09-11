import React from 'react';
import Button from './Button';
import {FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa'

const Header = ({title, onAdd}) => {

    return (
        <header class="App-header">
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }


export default Header
