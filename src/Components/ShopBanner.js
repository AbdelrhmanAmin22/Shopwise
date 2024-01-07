import React from 'react'
import ShopBannerStyles from './css/ShopBanner.module.css'
import bannerWomen from '../assets/images/shop_banner_img1.jpg'
import bannerMen from '../assets/images/shop_banner_img2.jpg'

const ShopBanner = () => {
    return (
        <section className={ShopBannerStyles.container}>
            <div className={ShopBannerStyles.banner} style={{ backgroundImage: `url(${bannerWomen})` }}>
                <div className={ShopBannerStyles.info}>
                    <h4>Super Sale</h4>
                    <h5>New Collection</h5>
                    <h6>Shop Now</h6>
                </div>
            </div>
            <div className={ShopBannerStyles.banner}  style={{ backgroundImage: `url(${bannerMen})` }}>
            <div className={ShopBannerStyles.info}>
                    <h4>New Season</h4>
                    <h5>Sale 40% Off</h5>
                    <h6>Shop Now</h6>
                </div>
            </div>
        </section>
    )
}

export default ShopBanner
