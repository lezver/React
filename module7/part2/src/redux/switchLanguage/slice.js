import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
	name: "language",
	initialState: { language: "ua" },
	reducers: {
		changeLanguage(state, action) {
			state.language = action.payload;
		},
	},
});

export const { changeLanguage } = languageSlice.actions;
