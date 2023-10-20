import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'counter',
  initialState : {
    basket: []
  },
  reducers: {
   addProduct: (state, action) => {
    state.basket.push(action.payload)
    localStorage.setItem('my-basket', JSON.stringify(state.basket))
   }
  },
})

const savedCart = localStorage.getItem('my-basket');
const initialState = {
  basket: savedCart ? JSON.parse(savedCart) : [],
};

export const { addProduct } = productSlice.actions

export default productSlice.reducer