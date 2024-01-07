import React, { useState, useEffect } from 'react';
import UpScrollStyles from './css/UpScroll.module.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UpScroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsVisible(scrollY > 100);
        };

    window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return isVisible ? (
        <div className={UpScrollStyles.UpContainer} onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
        </div>
    ) : null;
};

export default UpScroll;
