import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../store/actions'

function ForgotPassword () {
    const dispatch = useDispatch()

    const [ email, setEmail ] = useState('')

    const forgotPasswordButton = (event) => {
        event.preventDefault()
        let payload = {
            email
        }
        dispatch(forgotPassword(payload))
    }

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}> Forgot Password </h1>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ForgotPassword