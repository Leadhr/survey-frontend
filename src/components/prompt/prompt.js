import React from 'react'
import './prompt.css'

function Prompt(props) {
    if (props.text) {
        return (
            <div className="prompt">
                <p>{Math.floor(props.current / 2 + 1)}. {props.text}</p>
            </div>
        )
    } else {
        return null
    }
}

export default Prompt;