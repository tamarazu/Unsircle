import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import NavbarPanel from '../components/NavbarPanel'
import homePicture from '../assets/homePicture.svg'

export default function Home () {
    const history = useHistory()

    if(!localStorage.token) history.push('/login')
    return (
        <div>
            <NavbarPanel/>
            <div className="d-flex justify-content-center">
                <img src={homePicture} alt="controlPicture"/>
                <h1>INi HOME</h1>
            </div>
        </div>
    )
}