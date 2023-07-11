import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./types";

const defaultState = [
	{ name: "Potato", price: 20 },
	{ name: "Tomato", price: 90 },
	{ name: "Onion", price: 40 },
	{ name: "Cucumber", price: 50 },
	{ name: "Banana", price: 45 },
	{ name: "Beetroon", price: 35 },
	{ name: "Strawberry", price: 110 },
];

export const productsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return [...state, action.payload];

		case DELETE_PRODUCT:
			return state.filter(({ name }) => name !== action.payload.name);
		case UPDATE_PRODUCT:
			return state.reduce((acc, product) => {
				if (product.name === action.payload.name) {
					acc.push(action.payload);
					return acc;
				}
				acc.push(product);
				return acc;
			}, []);
		default:
			return state;
	}
};
