import React from 'react';
import CartIStyles from './css/CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../Redux/Slices/cartSlice';

const CartItem = (props) => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch()
    return (
        <div>
            {cartItems.map((el) => (
                <div className={CartIStyles.cartItem} key={el.id}>
                    <div className={CartIStyles.cartItemInfo}>
                        <div className={CartIStyles.imgContainer}>
                            <img src={el.thumbnail} alt='productImage' className={props.sm === 'sm' ? CartIStyles.img2 : CartIStyles.img} />
                            <button className={props.sm === 'sm' ? CartIStyles.btn2 : CartIStyles.btn}
                            onClick={()=>dispatch(deleteFromCart(el))}>
                                <FontAwesomeIcon icon={faTrashCan} /> Remove
                            </button>
                        </div>
                        <p className={props.sm === 'sm' ? CartIStyles.name2 : CartIStyles.name}>{el.title}</p>
                    </div>
                    <div className={CartIStyles.cartItemPrice}>
                        <h6 className={props.sm === 'sm' ? CartIStyles.price2 : CartIStyles.price}>{el.price} $</h6>
                        <div className={props.sm === 'sm' ? CartIStyles.count2 : CartIStyles.count}> {el.quantity} </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
