import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: [
		{filterText: '', inStockOnly: false}
	],
	reducers: {
		filterProducts: (state, action) => {
	
		},
		toggleStockOnly: (state, action) => {
		state=action.payload
	}
}
})

export const { filterProducts, toggleStockOnly } = productSlice.actions;

export default productSlice.reducer;