import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "milkProduct",

    initialState: {
        data: [],
        cartItems: []
    },
    reducers: {
        productData: (state, action) => {
            state.data = action.payload

        },
        cartData: (state, action) => {
            state.cartItems.push(action.payload)
        }

    }
});
export const { productData, cartData } = productSlice.actions;
export default productSlice.reducer
