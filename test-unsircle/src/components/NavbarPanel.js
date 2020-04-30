import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarPanel () {

    const logout = (event) => {
        localStorage.clear()
    }

    return (
    <Navbar bg="light d-flex justify-content-between">
        <Navbar.Brand href="#home"  style={{paddingLeft: '20px'}}>
                <img src="https://i0.wp.com/unsircle.id/wp-content/uploads/2020/01/Unsircle-logo-png.png?fit=1079%2C300&ssl=1" alt="RegisterPicture" style={{width: '170px'}}/>
        </Navbar.Brand>
        <Link 
            style={{padding: "5", fontSize: '20px', color: 'black', paddingRight: '15px'}}
            onClick={(event) => logout(event)}
        >Logout</Link>
    </Navbar>
    )
}

export default NavbarPanel