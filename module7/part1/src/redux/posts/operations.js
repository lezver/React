import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// BEFORE

// import { fetchingError, fetchingInProgress, fetchingSuccess } from "./slice";

// export const fetchPosts = () => async (dispatch) => {
// 	try {
// 		dispatch(fetchingInProgress());

// 		const { data } = await axios.get(`${BASE_URL}/posts`);

// 		dispatch(fetchingSuccess(data));
// 	} catch (error) {
// 		dispatch(fetchingError(error.message));
// 	}
// };

// AFTER

export const fetchPosts = createAsyncThunk(
	"posts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await axios.get(`${BASE_URL}/posts`);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
