import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import IconsContainer from './IconsContainer'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HeaderStyles from './css/Header.module.css'
import MobileMenu from './MobileMenu';
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
    const [display, setDisplay] = useState(true)
    const [displayMenu, setDisplayMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setDisplay(false);
                setDisplayMenu(true);
                setIsMobile(true)
            } else {
                setDisplay(true);
                setDisplayMenu(false);
                setIsMobile(false)
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const headerClass = `${HeaderStyles.myHeader} ${isScrolled ? HeaderStyles.myFixedHeader : ''}`;

    return (
        <header className ={headerClass}>
            <div className={HeaderStyles.myHeaderContainer}>
                <Logo/>
                <Nav display={display} isMobile={isMobile}/>
                    <IconsContainer icons={[{ icon: faSearch, path: '/search' }, { icon: faShoppingCart, path: '/cart' }]} display={display} />
                <MobileMenu display={displayMenu}/>
            </div>
        </header>
    )
}

export default Header
