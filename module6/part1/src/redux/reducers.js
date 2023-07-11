import { combineReducers } from "redux";
import { colorThemesReducer } from "./colorThemes/reducer";
import { languageReducer } from "./switchLanguage/reducer";
import { productsReducer } from "./poducts/reducer";
import { todoReducer } from "./todo/reducer";

const appReducer = combineReducers({
	themes: colorThemesReducer,
	languages: languageReducer,
	products: productsReducer,
	todo: todoReducer,
});

export default (state, action) => appReducer(state, action);
