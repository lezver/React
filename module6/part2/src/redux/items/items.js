import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
	name: "items",
	initialState: { arr: [1, 2, 3, 4, 5] },
	reducers: {
		add(state, action) {
			state.arr.push(action.payload);
		},
		remove(state, action) {
			return {
				arr: [...state.arr.filter((item) => item !== action.payload)],
			};
		},
	},
});

export const { add, remove } = itemsSlice.actions;
