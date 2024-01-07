import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import viewStyles from './css/CartView.module.css'
const CartView = () => {
    
    return (
        <div className={viewStyles.container} id='specialCartView'>
            <h6 className={viewStyles.h6}>Your Cart</h6>
            <CartItem sm = 'sm'/>
            <Link className={viewStyles.btn} to='/cart'> View Cart</Link>
        </div>
    )
}

export default CartView
