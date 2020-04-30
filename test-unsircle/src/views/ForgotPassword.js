import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../store/actions'

import Loading from '../components/Loading'

function ForgotPassword () {
    const dispatch = useDispatch()
    const history = useHistory()

    const [ email, setEmail ] = useState('')
    const loading = useSelector(state => state.reducers.loading)
    const page = useSelector(state => state.reducers.page)

    const forgotPasswordButton = (event) => {
        event.preventDefault()
        let payload = {
            email
        }
        dispatch(forgotPassword(payload))
    }

    if(page) history.push('/')
    if(loading) return <Loading/>
    return (
        <div className="container justify-content-center forgotPassword">
            <div className="d-flex justify-content-center" style={{paddingBottom: '60px'}}>
                <img src="https://i0.wp.com/unsircle.id/wp-content/uploads/2020/01/Unsircle-logo-png.png?fit=1079%2C300&ssl=1" alt="RegisterPicture" style={{width: '300px', paddingTop: '20px'}}/>
            </div>
                <h1 style={{textAlign: "center"}}> Forgot Your Password? </h1>
                <p style={{textAlign: "center"}}>Don't worry, resetting your password is easy. Just tell us email address you registered in Unsircle.</p>
            <Form
                onSubmit={(event) => forgotPasswordButton(event)}
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
                <div className="d-flex justify-content-center">
                    <Button 
                        variant="primary"
                        className="buttonForm" 
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
                <div className="d-flex justify-content-center register-link">
                        <small style={{paddingLeft: '5px', paddingTop: '0px', textAlign: "center"}}>
                            Back to 
                            <Link
                                to="/"
                            >
                                  Login
                            </Link>
                        </small>
                    </div>
            </Form>
        </div>
    )
}

export default ForgotPassword