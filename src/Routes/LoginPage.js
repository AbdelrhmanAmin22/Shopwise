import React, { useState } from 'react'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import loginStyles from './css/LoginPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [incorredData, setIncorrectData] = useState(false)
    const [isLogin, setIsLogin]  = useState(false)
    const [loginData , setLoginData] = useState({
        email : ``,
        password: ``
    })

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
        console.log("Form Data:", loginData);
    
        if (loginData.email === "amin@gmail.com" && loginData.password === "123456") {
            setIsLogin(true);
            setIncorrectData(false);
            sessionStorage.setItem('isLogin', 'true');
            navigate('/home');
        } else {
            setIsLogin(false);
            setIncorrectData(true);
            sessionStorage.setItem('isLogin', 'false');
        }
    };
    
    
    

    return (
        <>
            <Header/>
            <section>
                <div className={loginStyles.head}>
                    <h2  className={loginStyles.h2}>Login</h2>
                </div>
                <div  className={loginStyles.container}>
                    <div className={loginStyles.LoginForm} >
                        <h2 className={loginStyles.loginhead}>Login</h2>
                        {
                            incorredData? (<div className={loginStyles.error}>Incorrect email or password</div>) :null
                        }
                        <input className={loginStyles.input} type='text' placeholder='Your Email' value={loginData.email} name='email' onChange={handleLoginChange}/>
                        <input  className={loginStyles.input} type='password' placeholder='Your Password' value={loginData.password} name='password' onChange={handleLoginChange} />
                        <div className={loginStyles.LoginOption} >
                            <div className={loginStyles.checkboxContainer }>
                                <input className={loginStyles.checkbox} type='checkbox'/>
                                <span>Remember me</span>
                            </div>
                            <span className={loginStyles.forgetPassword}>Forgot password?</span>
                        </div>
                        <input className={loginStyles.loginsubmit} type='submit' value='Login' onClick={handleLoginSubmit}/>
                        <div className={loginStyles.or}>
                            <div className={loginStyles.line}></div>
                            <div>OR</div>
                            <div className={loginStyles.line}></div>
                        </div>
                        <div className={loginStyles.register}>
                            <div className={loginStyles.btnContainer}>
                                <button className={loginStyles.fb}> <FontAwesomeIcon icon={faFacebookF} />Facebook</button>
                                <button className={loginStyles.go}> <FontAwesomeIcon icon={faGooglePlusG} />Google</button>
                            </div>
                            <div className={loginStyles.signupContainer}>
                                <div>Don't Have an Account?</div>
                                <div className={loginStyles.signup}>Sign up now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default LoginPage
