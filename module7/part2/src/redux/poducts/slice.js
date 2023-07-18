import { createSlice } from "@reduxjs/toolkit";

const defaultState = [
	{ name: "Potato", price: 20 },
	{ name: "Tomato", price: 90 },
	{ name: "Onion", price: 40 },
	{ name: "Cucumber", price: 50 },
	{ name: "Banana", price: 45 },
	{ name: "Beetroon", price: 35 },
	{ name: "Strawberry", price: 110 },
];

export const productsSlice = createSlice({
	name: "products",
	initialState: { products: defaultState },
	reducers: {
		addProduct(state, action) {
			state.products.push(action.payload);
		},
		deleteProduct(state, action) {
			state.products = state.products.filter(
				({ name }) => name !== action.payload
			);
		},
		updateProduct(state, action) {
			state.products = state.products.reduce((acc, product) => {
				if (product.name === action.payload.name) {
					acc.push(action.payload);
					return acc;
				}
				acc.push(product);
				return acc;
			}, []);
		},
	},
});

export const { addProduct, deleteProduct, updateProduct } =
	productsSlice.actions;
