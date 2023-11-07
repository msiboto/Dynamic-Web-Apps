/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react"

export default function Jokes(props) {
    return (
        <div>
            <h3>Setup: {props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
        </div>
    )
} 

