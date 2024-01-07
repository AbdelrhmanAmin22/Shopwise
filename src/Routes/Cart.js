import React from 'react'
import CartItem from '../Components/CartItem'
import cartStyles from './css/Cart.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../Redux/Slices/cartSlice'

const Cart = () => {
    const cart = useSelector(state=> state.cart)
    const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
    const dispatch = useDispatch()
    const totalPrice = cart.reduce((acc, product)=>{
        acc += product.price * product.quantity
        return acc
    }, 0)
    return (
        <>
            <Header/>
            <section className= {cartStyles.cart} >
            <div className= {cartStyles.head}>
                Cart ({totalQuantity})
            </div>
            <div className= {cartStyles.cartContainer}>
                <div className= {cartStyles.ItemsContainer}>
                    <CartItem sm = 'bg'/>
                </div>
                <div className= {cartStyles.Summarycart}>
                    <h6 className= {cartStyles.title}>CART SUMMARY</h6>
                    <div >Subtotal :{totalPrice} $ </div>
                    <butto className= {cartStyles.btn}>CHECKOUT</butto>
                </div>
                <div>
                    <button className= {cartStyles.btn} onClick={()=>dispatch(clear())}>Clear Cart</button>
                </div>
            </div>
            </section>
            <Footer/>
        </>
        
    )
}

export default Cart
