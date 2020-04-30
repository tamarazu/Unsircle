import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarPanel () {

    const logout = (event) => {
        localStorage.clear()
    }

    return (
    <Navbar bg="light d-flex justify-content-between">
        <Navbar.Brand href="#home">Unsircle Test</Navbar.Brand>
        <Link 
            style={{padding: "5", fontSize: '20px'}}
            onClick={(event) => logout(event)}
        >Logout</Link>
    </Navbar>
    )
}

export default NavbarPanel