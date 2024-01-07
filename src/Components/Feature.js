import React from 'react'
import FeatureStyles from './css/Feature.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feature = (props) => {
    return (
        <div className={FeatureStyles.optionBox}>
            <div className={FeatureStyles.icon}><FontAwesomeIcon icon={props.icon} /></div>
            <div>
                <h5 className={FeatureStyles.title1}>{props.title1}</h5>
                <h6 className={FeatureStyles.title2}>{props.title2}</h6>
            </div>
        </div>
    )
}

export default Feature
