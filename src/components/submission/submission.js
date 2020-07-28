import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import Reset from '../reset/reset'

function Submission(props){

    const [submitted, setSubmitted] = useState(false)
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        //call submit from surveywrapper
        props.submitAnswers(value)
        setSubmitted(true)
        e.preventDefault()
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
    </Form> : <Reset setSubmitted={setSubmitted} resetSurvey={props.resetSurvey} ></Reset>
    )
}

export default Submission;