import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SingleStyle from './css/SingleProduct.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/cartSlice';

const SingleProduct = () => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({});
    const [counter, setCounter] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const URL = useLocation().pathname;
    const productId = URL.split('/product/')[1];

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [showAlert]);


    const handleIncrement = () => {
        setCounter(counter+1);
    };

    const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter-1);
        }
    };
    const handleAddToCart = () => {
        dispatch(addToCart({ productData, quantity: counter }));
        setShowAlert(true);
    };

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => setProductData(res.data))
        .catch((err) => console.log(err));
    }, [productId]);



    return (
        <>
        <Header/>
        {showAlert && (
                <div className={SingleStyle.alert}>
                    <p>Product added successfully</p>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
            )}
        <div className={SingleStyle.SingleproductCotainer}>
            <div className={SingleStyle.SingleproductSlider}>
                <div id="productCarousel" className="carousel carousel-dark slide singlepSlider" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    {productData.images && productData.images.length > 0 ? (
                        productData.images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#productCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : ''}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                    </div>

                    <div className="carousel-inner">
                    {productData.images && productData.images.length > 0 ? (
                        productData.images.map((imageUrl, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img
                            src={imageUrl}
                            alt='img'
                            className={SingleStyle.img}
                            />
                        </div>
                        ))
                    ) : (
                        <div className="carousel-item">
                        <p>No images available</p>
                        </div>
                    )}
                    </div>

                    <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="prev"
                    >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="next"
                    >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <div className={SingleStyle.productdata}>
                <h1>{productData.title}</h1>
                <p>{productData.description}</p>
                <p>Brand: {productData.brand}</p>
                <p>Category: {productData.category}</p>
                <p>Price: ${productData.price}</p>
                <p>Discount: {productData.discountPercentage}%</p>
                <p>Rating: {productData.rating}</p>
                <p>Stock: {productData.stock}</p>
                <div className={SingleStyle.addToCartContainer}>
                    <button onClick={handleDecrement} className={SingleStyle.click}>-</button>
                    <span  className={SingleStyle.counter}>{counter}</span>
                    <button onClick={handleIncrement } className={SingleStyle.click}>+</button>
                    <button className={SingleStyle.add} onClick={handleAddToCart}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default SingleProduct;
