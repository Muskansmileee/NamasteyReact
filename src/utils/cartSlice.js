import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name : "cart",
   initialState : {
      items : []
   },
   reducers : {
     addItem : (state, action) => {
       //Redux toolkit using Immer behind the scenes to make immutable state.
        state.items.push(action.payload);
     },
     removeItem : (state) => {
        state.items.pop();
     },
     clearCart : (state) => {
      console.log(current(state));
      //RTK - either you mutate the state or return a new state.
      //return { items:[] } ; will also work.
        state.items.length = 0;
     }
   }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;