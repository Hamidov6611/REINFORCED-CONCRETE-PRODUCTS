import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: []
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addProduct: (state, action) => {
    state.product.push(action.payload)
   }
  },
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer