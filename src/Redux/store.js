import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Slices/productsSlice'
import cartSlice from './Slices/cartSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart : cartSlice
    },
})
