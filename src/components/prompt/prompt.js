import React from 'react'
import './prompt.css'

function Prompt(props) {

    if (props.question) {
        return (
            <div className="prompt">
                <p> {props.question.number}. {props.question.question}</p>
            </div>
        )
    } else {
        return null
    }
}

export default Prompt;