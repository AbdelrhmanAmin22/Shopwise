import React from 'react'
import ProductCardStyles from './css/ProductCard.module.css'
import { NavLink} from 'react-router-dom';

const ProductCard = (props) => {
    return (
        props.Pdata.map((el)=>(
            <div className={ProductCardStyles.ProductCard} key={el.id} >
                <div><img className={ProductCardStyles.productImg} src={el.thumbnail} alt="imgProduct"/></div>
                <div className="info">
                    <h4 className={ProductCardStyles.h4}>{el.title}</h4>
                    <div className={ProductCardStyles.priceBox}>
                        <h6 className={ProductCardStyles.price}>${el.price}</h6>
                    </div>
                </div>
                {
                    props.hasOffer ? (<div className={ProductCardStyles.offer}>
                <h6 className={ProductCardStyles.priceCancled}>{el.discountPercentage} %</h6>
            </div>) : null
                }

            <div className={ProductCardStyles.boxOverlay}>
            <NavLink className={ProductCardStyles.boxOverlaybutton} to={`/product/${el.id}`}>View Product</NavLink>
            </div>
    </div>
        ))
    
    )
}

export default ProductCard
