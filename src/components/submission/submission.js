import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

function Submission(){

    const [submitted, setSubmitted] = useState(false)
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        //call submit from surveywrapper
        setSubmitted(true)
    }

    return (
        !submitted ? <Form onSubmit={handleSubmit}>
        <Form.Label>
            Name: 
        </Form.Label>
        <Form.Control onChange={handleChange} value={value} type="username" placeholder="enter your name"/>
        <Button type="submit">
            Submit
        </Button>
    </Form> : <h1>thanks, {value}</h1>
    )
}

export default Submission;