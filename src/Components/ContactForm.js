import React, { useState } from 'react';
import contactFormStyle from './css/ContactForm.module.css';
import Map from './Map';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className={contactFormStyle.formContainer}>
        <div className={contactFormStyle.formInfo}>
            <h2 className={contactFormStyle.h2}>Get In Touch</h2>
            <p className={contactFormStyle.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim. Nullam id varius nunc id varius nunc.
            </p>
            <div className={contactFormStyle.form}>
            <div className={contactFormStyle.InputformContainer}>
                <input
                className={contactFormStyle.Inputform}
                type="text"
                placeholder="Enter Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <input
                className={contactFormStyle.Inputform}
                type="text"
                placeholder="Enter Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div className={contactFormStyle.InputformContainer}>
                <input
                className={contactFormStyle.Inputform}
                type="text"
                placeholder="Enter Phone*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                />
                <input
                className={contactFormStyle.Inputform}
                type="text"
                placeholder="Enter Subject*"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                />
            </div>
            <textarea
                className={contactFormStyle.Inputform}
                placeholder="Message*"
                name="message"
                value={formData.message}
                onChange={handleChange}
            ></textarea>
            <input
                className={contactFormStyle.Submitform}
                type="submit"
                value="Send Message"
                onClick={handleSubmit}
            />
            </div>
        </div>
        <div className={contactFormStyle.mapContainer}>
            <Map />
        </div>
        </div>
    );
};

export default ContactForm;
