import React from 'react'
import SliderElementStyle from './css/SliderElements.module.css'

const SliderElement = (props) => {
    const elementBackground = props.bc;
    return (
        <div  className={`${SliderElementStyle.box} ${SliderElementStyle[elementBackground]}`}>
            <div className={SliderElementStyle.left}>
                <div>
                    <h5 className={SliderElementStyle.lefth5}>{props.title}</h5>
                    <h2 className={SliderElementStyle.lefth2}>{props.desc}</h2>
                </div>
            </div>
            <div className={SliderElementStyle.right}>
                <img src = {props.src} alt="" />
            </div>
        </div>
    )
}

export default SliderElement
