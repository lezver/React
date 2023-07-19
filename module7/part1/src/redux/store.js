import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts/slice";
import { pokemonApi } from "./pokemon/operations";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		posts: postsSlice.reducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});
setupListeners(store.dispatch);
