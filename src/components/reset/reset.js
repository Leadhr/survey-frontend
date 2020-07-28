import React from 'react';
import Button from 'react-bootstrap/Button'

function Reset(props) {

    function handleSubmit(e) {
        props.resetSurvey()
        props.setSubmitted(true)
        e.preventDefault()
    }

    function refreshPage() {
        window.location.reload(false)
    }

    return (
        <Button onClick={handleSubmit}>
            retake assesment
        </Button>
    )
}

export default Reset;