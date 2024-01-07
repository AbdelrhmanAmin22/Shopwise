import React from 'react'
import Header from '../Components/Header'
import ProductPageStyles from './css/ProductPage.module.css'
import Footer from '../Components/Footer'
import TreandingProducts from '../Components/TreandingProducts'

const ProductsPage = () => {

    const categories = ["All","smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"]

    return (
        <>
            <Header/>
            <section className={ProductPageStyles.product} >
                <div className={ProductPageStyles.container}>
                    <div className={ProductPageStyles.options}>{categories.map((el)=>(<button className={ProductPageStyles.btn}>{el}</button>))}</div>
                </div>
                <div>
                    <TreandingProducts title="our products"/>
                </div>
            </section>
        
            <Footer/>
        </>
    )
}

export default ProductsPage
