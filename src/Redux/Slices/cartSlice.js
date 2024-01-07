import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const { productData, quantity } = action.payload;
            const findProduct = state.find((product) => product.id === productData.id);
            if (findProduct) {
                findProduct.quantity += quantity;
            } else {
                const productClone = { ...productData, quantity };
                state.push(productClone);
            }
        },
        deleteFromCart : (state, action) => {
            return state.filter((product)=>product.id !== action.payload.id)
        },
        clear: (state, action) => {
            return []
        },
    },
})

export const {addToCart, deleteFromCart, clear } = cartSlice.actions

export default cartSlice.reducer
