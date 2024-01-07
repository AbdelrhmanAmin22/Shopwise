import React from 'react'
import Feature from './Feature'
import FeaturesStyles from './css/Features.module.css'
import { faHeadset, faMoneyBillWave, faTruckFast, faCreditCard} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <section className={FeaturesStyles.features}>
            <Feature title1= "Free Delivery" title2="Worldwide" icon={faTruckFast} />
            <Feature title1= "Money Returns" title2="30 Days money return"icon={faMoneyBillWave} />
            <Feature title1= "27/4 Online Support" title2="Customer Support" icon={faHeadset}/>
            <Feature title1= "Payment Security" title2="Safe Payment"  icon={faCreditCard} />
        </section>
    )
}

export default Features
