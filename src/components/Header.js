//import React from 'react'

import PropTypes from 'prop-types' // impt
import Button from './Button'


const Header = ({title, onAdd, showAdd }) => { // Arrow Function & Title is Destructuring Assignment 
    return (

    <header className = 'header'>
        <h1 >{title}</h1>

        <Button color = {showAdd ? 'orangered ' : 'limegreen'} 
        text = {showAdd ? 'Close':'Add'} onClick = {onAdd}/>
        
    </header>
    )
}

Header.defaultProps = {
    title : 'Create Your Todos',
}

Header.propTypes = {
    title : PropTypes.string.isRequired, // for create a type
}

export default Header
