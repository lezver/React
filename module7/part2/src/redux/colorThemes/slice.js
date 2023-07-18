import { createSlice } from "@reduxjs/toolkit";

export const colorThemesSlice = createSlice({
	name: "themes",
	initialState: { colorTheme: true },
	reducers: {
		changeTheme(state, action) {
			state.colorTheme = action.payload;
		},
	},
});

export const { changeTheme } = colorThemesSlice.actions;
