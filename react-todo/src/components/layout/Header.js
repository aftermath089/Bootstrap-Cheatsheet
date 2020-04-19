import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header style = {HeaderStyle}>
            <h1>Todo List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const HeaderStyle = {
    background : '#333',    
    textAlign : 'center',
    color : '#fff',
    padding : '10px'
}

const linkStyle = {
    color : '#fff'
}
export default Header
