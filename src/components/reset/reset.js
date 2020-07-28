import React from 'react';
import Button from 'react-bootstrap/Button'

function Reset(props) {

    function handleSubmit(e) {
        props.resetSurvey()
        e.preventDefault()
    }

    return (
        <Button onSubmit={handleSubmit}>
            retake assesment
        </Button>
    )
}

export default Reset;