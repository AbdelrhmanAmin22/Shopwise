// Import necessary libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconsContainerStyles from './css/IconsContainer.module.css';
import CartView from './CartView';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// IconsContainer component
const IconsContainer = (props) => {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
    const { icons } = props;
    const display = props.display;
    const [cartView, setCartView] = useState(false);

    const handleCircleClick = () => {
        setCartView(!cartView);
    };

    const handleIconClick = (path) => {
        if (path === '/search') {
            navigate(path);
        } else {
            setCartView(!cartView);
        }
    };

    return display ? (
        <div className={IconsContainerStyles.iconsContainer}>
            {icons.map((icon, idx) => (
                <FontAwesomeIcon
                    key={idx}
                    icon={icon.icon}
                    onClick={() => handleIconClick(icon.path)}
                />
            ))}
            <div
                className={IconsContainerStyles.circle}
                onClick={handleCircleClick}
            >
                {totalQuantity}
            </div>

            {cartView ? <CartView /> : null}
        </div>
    ) : null;
};

export default IconsContainer;
