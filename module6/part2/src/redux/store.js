import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./items/items";
import { myReducer } from "./myValue/myValue";
import { userSlice } from "./user/user";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, itemsSlice.reducer);

export const store = configureStore({
	reducer: {
		myValue: myReducer,
		items: persistedReducer,
		user: userSlice.reducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		});
	},
});

export const persistor = persistStore(store);
