import {createReducer} from '@reduxjs/toolkit';
const initialState = {
	cart: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
};

export const cartReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('addToCart', (state, action) => {
			const item = action.payload;
			const isItemExist = state.cart.find((i) => i._id === item._id);
			if (isItemExist) {
				return {
					...state,
					cart: state.cart.map((i) => {
						return i._id == item._id ? item : i;
					}),
				};
			} else {
				return {
					...state,
					cart: [...state.cart, item],
				};
			}
		})
		.addCase('removeFromCart', (state, action) => {
			return {
				...state,
				cart: state.cart.filter((item) => {
					return item._id !== action.payload;
				}),
			};
		})
		.addCase('clearCart', (state) => {
			return {
				...state,
				cart: [],
			};
		})
		.addCase('createOrder', (state, action) => {
			state.orderData = action.payload;
		});
});
