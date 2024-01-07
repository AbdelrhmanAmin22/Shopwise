import React, { useEffect, useState } from 'react'
import TreadingStyles from './css/TreandingProducts.module.css'
import ProductCard from './ProductCard'
import axios from 'axios'
import EmptyProduct from './EmptyProduct'

const TreandingProducts = (props) => {
    const [data, setData] = useState([]);
    const hasOffer = props.hasOffer;
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setData(res.data.products))
        .then(err=>console.log(err))
    },[])

    const treandingProducts = data.slice(0, props.number);

    return (
        <section className={TreadingStyles.TreandingProducts}>
            <div className={TreadingStyles.headTitle}>
                <h2 className={TreadingStyles.h2}>{props.title}</h2>
                <div className={TreadingStyles.line}></div>
            </div>
            <div  className={TreadingStyles.productsContainer}>
                {
                    data? (
                        <ProductCard Pdata = {treandingProducts} hasOffer = {hasOffer}/>
                    ) : (
                        <EmptyProduct/>
                    )
                }
            </div>
        </section>
    )
}

export default TreandingProducts
