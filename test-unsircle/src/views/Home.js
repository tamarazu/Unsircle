import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import NavbarPanel from '../components/NavbarPanel'
import homePicture from '../assets/homePicture.svg'

export default function Home () {
    const history = useHistory()

    if(!localStorage.token) history.push('/login')
    return (
        <div>
            <NavbarPanel/>
            <div>
                <Row style={{justifyContent: "center"}}>
                    <Col >
                        <h1>Welcome to Unsircle</h1>
                        <img src={homePicture} alt="controlPicture"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}