import React from 'react'
import LoadingGif from '../assets/loading.gif'

export default function Loading() {
    return (
        <div className="d-flex justify-content-center">
            <img src={LoadingGif}/>
        </div>
    )
}