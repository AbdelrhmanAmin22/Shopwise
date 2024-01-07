import React, { useEffect, useState } from 'react';
import { Link, NavLink, json, useLocation } from 'react-router-dom';
import './css/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import avaterImg from '../assets/images/avater.png'
const Nav = (props) => {
    const [homeActive, setHomeActive] = useState(false);
    const pathURL = useLocation().pathname;
    useEffect(()=> {
        if(pathURL === '/' || pathURL === '/home' ) {
            setHomeActive(true)
        }
        else {
            setHomeActive(false)
        }
    },[pathURL])
    const display = props.display;
    
    const IsLogin = JSON.parse(sessionStorage.getItem('isLogin'));

    return display ?(
        <nav>
            <ul className='myFlex'> 
                <li><NavLink className={homeActive ? 'link active' : 'link notActive'} to='/home'>Home</NavLink></li>
                <li><NavLink className= 'link' to='/products'>Products</NavLink></li>
                <li><NavLink className= 'link' to='/contact'>Contact us</NavLink></li>
                <li>
                {
                    IsLogin ? (
                        <li  className= 'avaterContainer'>
                            <img src={avaterImg } alt='useravater'  className= 'avaterimg'/>
                            Welcome amin
                        </li>  
                        
                    ) : (
                        <NavLink className= 'link' to='/login'> <FontAwesomeIcon icon={faUser} /> Login</NavLink>
                    )
                }
                </li>
            </ul>

        </nav>
    ) :null ;
};

export default Nav;
