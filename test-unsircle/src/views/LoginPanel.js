import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'
import { login, setPage, setError } from '../store/actions'

import loginPicture from '../assets/login.svg'
import Loading from '../components/Loading'

function LoginPanel () {
    const dispatch = useDispatch()
    const history = useHistory()

    const error = useSelector(state => state.reducers.error)
    const loading = useSelector(state => state.reducers.loading)
    const page = useSelector(state => state.reducers.page)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    useEffect(() => {
        dispatch(setPage(''))
        dispatch(setError(null))
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
    if(loading) return <Loading/>
    return (
        <div>
            <div className="d-flex justify-content-center">
                <img src="https://i0.wp.com/unsircle.id/wp-content/uploads/2020/01/Unsircle-logo-png.png?fit=1079%2C300&ssl=1" alt="RegisterPicture" style={{width: '300px', paddingTop: '20px'}}/>
            </div>
            <Row className="m-3 justify-content-md-center">
               <Col>
                    <img src={loginPicture} alt="LoginPicture"></img>
               </Col>
               <Col className="form" >
                    <h1 style={{textAlign: "center"}}> Login </h1>
                    {error && <p style={{textAlign: "center", color: 'red'}}>{error}</p>}
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
                        <Form.Group>
                            <small 
                                className="forgotPassword" style={{paddingLeft: '5px', paddingTop: '-0px', fontSize: '14px'}}>
                                <Link
                                    to="/forgotPassword"
                                >
                                    Forgot Password
                                </Link>
                            </small>
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button 
                                // variant="primary" 
                                className="buttonForm"
                                type="submit"
                                style={{padding: '10'}}
                            >
                                Login
                            </Button>
                        </div>
                    </Form>
                    <div className="d-flex justify-content-center register-link">
                        <small style={{paddingLeft: '5px', paddingTop: '0px', textAlign: "center"}}>
                            Not a member? 
                            <Link
                                to="/register"
                            >
                                  Register Now
                            </Link>
                        </small>
                    </div>

               </Col>
           </Row>
        </div>
    )
}

export default LoginPanel