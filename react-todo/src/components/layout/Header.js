import React from 'react'

function Header() {
    return (
        <header style = {HeaderStyle}>
            <h1>Todo List</h1>
        </header>
    )
}

const HeaderStyle = {
    background : '#333',    
    textAlign : 'center',
    color : '#fff',
    padding : '10px'
}

export default Header
