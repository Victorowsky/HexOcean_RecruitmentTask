import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alertSlice";
import formSlice from "./formSlice";
import typesSlice from "./typesSlice";

export const store = configureStore({
	reducer: {
		form: formSlice,
		types: typesSlice,
		alert: alertSlice,
	},
});
