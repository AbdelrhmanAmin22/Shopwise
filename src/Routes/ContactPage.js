import React from 'react'
import Header from '../Components/Header'
import ContactBox from '../Components/ContactBox'
import Footer from '../Components/Footer'
import { faEnvelope, faMap, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import ContactPageStyles from './css/ContactPage.module.css'
import ContactForm from '../Components/ContactForm'
const ContactPage = () => {
  return (
    <>
      <Header/>
      <section className={ContactPageStyles.contactPage}>
        <div className={ContactPageStyles.head}>
          <h2  className={ContactPageStyles.h2}>Contact</h2>
        </div>
        <div className={ContactPageStyles.contactPageContainer}>
          <ContactBox title = "Address" parg = "123 Street, Old Trafford, London, UK" icon={faMap}/>
          <ContactBox title = "Email Address" parg = "info@yourmail.com" icon={faEnvelope}/>
          <ContactBox title = "Phone" parg = "+ 457 789 789 65"  icon={faMobileScreenButton} />
        </div>
      </section>
      <div className={ContactPageStyles.SubscribeContainer}>
            <div className={ContactPageStyles.container}>
              <p className={ContactPageStyles.p}>Subscribe Our Newsletter</p>
              <div  className={ContactPageStyles.inputContainer}>
                <input className={ContactPageStyles.input} type='text' placeholder='Enter Email Address'/>
                <input className={ContactPageStyles.input2} type='submit' value='Subscribe'/>
              </div>
            </div>
        </div>
        <ContactForm/>
      <Footer/>
    </>
  )
}

export default ContactPage
