import { ADD_TODO, DELETE_TODO, SEARCH_TODO } from "./type";

export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];
		case DELETE_TODO:
			return state.filter(({ id }) => id !== action.payload);
		default:
			return state;
	}
};
