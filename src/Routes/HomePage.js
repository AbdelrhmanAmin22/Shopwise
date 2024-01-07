import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Features from '../Components/Features'
import TreandingProducts from '../Components/TreandingProducts'
import ShopBanner from '../Components/ShopBanner'
import Footer from '../Components/Footer'



const HomePage = () => {

    return (
        <>
            <Header/>
            <Main/>
            <Features/>
            <TreandingProducts number="6" title="Trending Items" hasOffer ={true}/>
            <ShopBanner/>
            <Footer/>
        </>
    )
}

export default HomePage
