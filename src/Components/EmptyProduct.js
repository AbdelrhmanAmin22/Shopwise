import React from 'react'
import emptyStyles from './css/Empty.module.css'

const EmptyProduct = () => {
    return (
        <div className={emptyStyles.ProductCard} >
            <div className={emptyStyles.image}></div>
            <div className={emptyStyles.info}>
                <div className={emptyStyles.title}></div>
                <div className={emptyStyles.price}></div>
            </div>
        </div>
    )
}

export default EmptyProduct
