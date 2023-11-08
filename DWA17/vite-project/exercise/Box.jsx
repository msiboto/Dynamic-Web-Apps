/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

export default function Box(props) {
    const styles = { backgroundColor: props.on ? "#222222" : "none" }
     return (
        <div style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}>
            </div>
    )
}