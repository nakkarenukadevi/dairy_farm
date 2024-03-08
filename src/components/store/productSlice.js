import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "milkProduct",

    initialState: {
        data: [],
        cartItems: [],
        buyProduct: []
    },
    reducers: {
        productData: (state, action) => {
            state.data = action.payload

        },
        cartData: (state, action) => {
            state.cartItems = action.payload
        },
        QtyIncrese: (state, action) => {
            state.buyProduct = action.payload
        }


    }
});
export const { productData, cartData, QtyIncrese } = productSlice.actions;
export default productSlice.reducer