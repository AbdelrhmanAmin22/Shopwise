import React, { useState } from 'react';
import MobileMenuStyles from './css/MobileMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './MobileNav';

const MobileMenu = (props) => {
    const [showNav, setShowNav] = useState(false);
    const [menuIcon, setMenuIcon] = useState(faBars);
    const display = props.display;

    const handleClick = () => {
        setShowNav((prevShowNav) => !prevShowNav); // Toggle showNav state
        setMenuIcon((prevMenuIcon) =>
            prevMenuIcon === faBars ? faXmark : faBars
        );
    };

    return display ? (
        <>
            <div className={MobileMenuStyles.menu} onClick={handleClick}>
                <FontAwesomeIcon icon={menuIcon} />
            </div>

            {showNav ? <MobileNav show={showNav} /> : null}
        </>
    ) : null;
};

export default MobileMenu