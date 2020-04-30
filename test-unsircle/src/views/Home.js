import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import NavbarPanel from '../components/NavbarPanel'
import homePicture from '../assets/homePicture.svg'
import Loading from '../components/Loading'

export default function Home () {
    const history = useHistory()

    const loading = useSelector(state => state.reducers.loading)

    if(!localStorage.token) history.push('/login')
    if (loading) return <Loading/>
    return (
        <div>
            <NavbarPanel/>
            <div className="container">
                <Row style={{justifyContent: "center"}}>
                    <Col >
                        <h1 className="display-3" style={{textAlign: 'center', padding: '20px'}}>Welcome to Unsircle</h1>
                        <img src={homePicture} alt="controlPicture"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}