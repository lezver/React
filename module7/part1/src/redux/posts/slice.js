import { createSlice } from "@reduxjs/toolkit";

// BEFORE

// export const postsSlice = createSlice({
// 	name: "posts",
// 	initialState: {
// 		items: [],
// 		isLoading: false,
// 		error: null,
// 	},
// 	reducers: {
// 		fetchingInProgress(state) {
// 			state.isLoading = true;
// 		},
// 		fetchingSuccess(state, action) {
// 			state.isLoading = false;
// 			state.items = action.payload;
// 			state.error = null;
// 		},
// 		fetchingError(state, action) {
// 			state.isLoading = false;
// 			state.items = [];
// 			state.error = action.payload;
// 		},
// 	},
// });

// export const { fetchingError, fetchingInProgress, fetchingSuccess } =
// 	postsSlice.actions;

// AFTER

import { fetchPosts } from "./operations";

export const postsSlice = createSlice({
	name: "posts",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		[fetchPosts.pending](state) {
			state.isLoading = true;
		},
		[fetchPosts.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
		},
		[fetchPosts.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
			state.items = [];
		},
	},
});
