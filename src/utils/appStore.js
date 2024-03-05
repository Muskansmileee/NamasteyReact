import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";   //we can give any name

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
    },
});

export default appStore;