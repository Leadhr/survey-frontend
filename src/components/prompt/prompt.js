import React from 'react'

function Prompt(props) {
    if (props.text) {
        return props.text
    } else {
        return null
    }
}

export default Prompt;