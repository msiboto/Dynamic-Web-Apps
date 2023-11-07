/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React from "react"

export default function Contacts(props) {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.number}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
            )
        }
        
/*
        export default function Contacts({img, name,  number, email}) {
            return (
                <div className="contacts">
                
                    <div className="contact-card">
                        <img src={img}/>
                        <h3>{name}</h3>
                        <div className="info-group">
                            <img src="./images/phone-icon.png" />
                            <p>{number}</p>
                        </div>
                        <div className="info-group">
                            <img src="./images/mail-icon.png" />
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
                    )
                }
                */