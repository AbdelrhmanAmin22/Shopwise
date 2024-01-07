import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MobilNavStyles from './css/MobileNav.module.css'
import avaterImg from '../assets/images/avater.png'

const MobileNav = (props) => {
    const ShowMenu = props.show 
    console.log(ShowMenu)
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

    const IsLogin = JSON.parse(sessionStorage.getItem('isLogin'));
    return (

        <div className={`${MobilNavStyles.mobileNav} ${ShowMenu ? MobilNavStyles.showMobileNav : ''}`}>
            <ul className={MobilNavStyles.mobileNavContainer}> 
                <li><NavLink className={homeActive ? 'link active' : 'link notActive'} to='/home'>Home</NavLink></li>
                <li><NavLink className= 'link' to='/products'>Products</NavLink></li>
                <li><NavLink className= 'link' to='/contact'>Contact us</NavLink></li>
                <li><NavLink className= 'link' to='/search'>search <FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink></li>
                <li><NavLink className= 'link' to='/cart'>Cart <FontAwesomeIcon icon={faCartShopping} /></NavLink></li>
                <li>
                {
                    IsLogin ? (
                        <li  className= 'avaterContainer'>
                            <img src={avaterImg} alt='useravater'  className= 'avaterimg'/>
                            Welcome amin
                        </li>  
                        
                    ) : (
                        <Link className= 'link' to='/login'> <FontAwesomeIcon icon={faUser} /> Login</Link>
                    )
                }
                </li>
            </ul>
        </div>

    )
}

export default MobileNav
