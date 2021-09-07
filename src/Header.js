import React from 'react';
import Button from './Button';
import {FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header class="App-header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'steelblue': '#5A91BFf'} text={showAdd ? <FaAngleDoubleUp/> : <FaAngleDoubleDown/>} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
  }


export default Header
