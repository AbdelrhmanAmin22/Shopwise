import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import SearchStyles from './css/Search.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setData(res.data.products))
        .then(err=>console.log(err))
    },[])

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };
   
    const searchProduct = (searchTitle) => {
        const foundProduct = data.find(product => product.title.toLowerCase() === searchTitle.toLowerCase());
        return foundProduct ? foundProduct.id : null;
    };
    const handleSearch = () => {
        const productId = searchProduct(search);

        if (productId !== null) {
            navigate(`/product/${productId}`);
        } else {
            alert('Product not found');
        }
    };

    return (
        <div className={SearchStyles.container}>
            <div className={SearchStyles.divSearch }>
                <input className={SearchStyles.input} type='text' placeholder='What do you search for ?'
                    value={search} onChange={handleInputChange}/>
                <FontAwesomeIcon className={SearchStyles.icon} icon={faMagnifyingGlass} 
                    onClick={handleSearch}
                />

            </div>
        </div> 
    )
}

export default Search
