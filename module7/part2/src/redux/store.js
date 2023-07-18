import { configureStore } from "@reduxjs/toolkit";
import { colorThemesSlice } from "./colorThemes/slice";
import { languageSlice } from "./switchLanguage/slice";
import { productsSlice } from "./poducts/slice";
import { todoSlice } from "./todo/slice";

export const store = configureStore({
	reducer: {
		themes: colorThemesSlice.reducer,
		language: languageSlice.reducer,
		products: productsSlice.reducer,
		todo: todoSlice.reducer,
	},
});
