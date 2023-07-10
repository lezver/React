import { act } from "react-dom/test-utils";

const defaultState = {
	language: "ua",
};
export const languageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_LANGUAGE_UA":
			return {
				...state,
				language: action.payload,
			};
		default:
			return state;
	}
};
