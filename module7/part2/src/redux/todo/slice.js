import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
	name: "todo",
	initialState: { todo: [] },
	reducers: {
		addTodo(state, action) {
			state.todo.push(action.payload);
		},
		deleteTodo(state, action) {
			state.todo = state.todo.filter(({ id }) => id !== action.payload);
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
