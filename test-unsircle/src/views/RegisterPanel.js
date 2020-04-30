import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import landingPagePicture from '../assets/landingPage.svg'
import { registerForm } from '../store/actions'

function RegisterPanel () {
    const dispatch = useDispatch()
    const history = useHistory()
    const error = useSelector(state => state.reducers.error)
    const page = useSelector(state => state.reducers.page)

    const [full_name, setFullName] = useState('')
    const [company_name, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [phone, setPhoneNumber] = useState('')

    const registerUser = (event)  => {
        event.preventDefault()
        let payload = {
            email,
            password,
            profile: {
                full_name,
                company_name,
                phone
            },
            reference: "Fakebook",
            url: "https://api.unsircle.id/verification/"
        }
        console.log(payload)
        dispatch(registerForm(payload))
    }

    if (page) history.push('/login')
    return (
        <div>
           <Row  className="m-3">
               <Col className="d-flex justify-content-center align-items-center">
                    <img src={landingPagePicture} alt="RegisterPicture"/>
               </Col>
               <Col className="container">
                   <h1 style={{textAlign: "center"}}>Register</h1>

                   {error && <p>{error}</p>}

                    <Form  
                        onSubmit={(event) => registerUser(event)}
                        autoComplete="off"
                    >
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                                onChange={(event) => setFullName(event.target.value)} 
                                type="text" 
                                placeholder="Your name" 
                            />
                        </Form.Group>

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
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                                onChange={(event) => setCompany(event.target.value)} 
                                type="text" 
                                placeholder="Company" 
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                                onChange={(event) => setPhoneNumber(event.target.value)} 
                                type="text" 
                                placeholder="Phone Number" 
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
               </Col>
           </Row>
        </div>
    )
}

export default RegisterPanel