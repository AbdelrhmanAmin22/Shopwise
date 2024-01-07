import { Fragment, useEffect, useState } from 'react';
import './App.css';
import HomePage from './Routes/HomePage';
import Loader from './Components/Loader';
import UpScroll from './Components/UpScroll';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Routes/NotFound';
import ProductsPage from './Routes/ProductsPage';
import ContactPage from './Routes/ContactPage';
import SingleProduct from './Routes/SingleProduct';
import LoginPage from './Routes/LoginPage';
import Cart from './Routes/Cart';
import Search from './Routes/Search';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <> 
    {
      isLoading ? (
        <Loader/>
      ) :
      (
        <Fragment>
          <UpScroll/>
          <Routes>
              <Route path='/*' element={<NotFound/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/products' element={<ProductsPage/>}/>
              <Route path='/contact' element={<ContactPage/>}/>
              <Route path='/product/:id' element={<SingleProduct/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/search' element={<Search/>}/>
          </Routes>
        </Fragment>
      )
    }
    </>
  )


}

export default App;
