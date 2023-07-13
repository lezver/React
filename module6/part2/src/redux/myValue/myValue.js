import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("myValue/increment");

export const decrement = createAction("myValue/decrement");

export const myReducer = createReducer(0, {
	[increment]: (state, action) => state + action.payload,
	[decrement]: (state, action) => state - action.payload,
});
