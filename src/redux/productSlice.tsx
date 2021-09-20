import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'prods',
	initialState: 
		{filterText: '', inStock: false}
	,
	reducers: {
		filterProds: (state, action) => {
		},
		toggleStock: (state, action) => {
	state.inStock=!action.payload.inStock;
	console.log("action was dispatched")
	}
}
})

export const { filterProds, toggleStock } = productSlice.actions;

export default productSlice.reducer;