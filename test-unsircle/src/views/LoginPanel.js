import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { login, setPage } from '../store/actions'

import loginPicture from '../assets/login.svg'


function LoginPanel () {
    const dispatch = useDispatch()
    const history = useHistory()

    const error = useSelector(state => state.reducers.error)
    const page = useSelector(state => state.reducers.page)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    useEffect(() => {
        dispatch(setPage(''))
    }, [])

    const loginSubmit = (event) => {
        event.preventDefault()
        let payload = {
            email,
            password
        }
        dispatch(login(payload))
    }

    if(page) history.push('/')
    return (
        <div>
            <Row>
               <Col>
                    <img src={loginPicture} alt="LoginPicture"></img>
               </Col>
               <Col>
                    <h1 style={{textAlign: "center"}}> Login </h1>
                    {error && <p>{error}</p>}
                    <Form  
                        onSubmit={(event) => loginSubmit(event)}
                        autoComplete="off"
                    >
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                onChange={(event) => setEmail(event.target.value)} 
                                type="text" 
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                onChange={(event) => setPassword(event.target.value)} 
                                type="password" 
                                placeholder="Password" 
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link
                            to="/forgotPassword"
                        >
                            Forgot Password
                        </Link>
                    </Form>
               </Col>
           </Row>
        </div>
    )
}

export default LoginPanel