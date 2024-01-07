import { faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import contactBox from './css/ContactBox.module.css'

const ContactBox = (props) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className={contactBox.ContactBox} onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>   
            <div className={`${contactBox.iconContainer} ${isHovered ? contactBox.iconContainerHover : ''}`}>
                <FontAwesomeIcon icon={props.icon} className={contactBox.icon}/>
                <div className={contactBox.circle}></div>
            </div>
            <div>
                <h6 className={contactBox.title}>{props.title}</h6>
                <p className={contactBox.p}>{props.parg}</p>
            </div>
        </div>
    )
}

export default ContactBox
