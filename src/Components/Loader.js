import React from 'react';
import LoaderStyle from './css/Loader.module.css';

const Loader = () => {

    return(
        <section className={LoaderStyle.loderContainer}>
        <div className={LoaderStyle.loader}></div>
        </section>
    )
};

export default Loader;
