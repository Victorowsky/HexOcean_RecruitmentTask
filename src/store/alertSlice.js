import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAlert: false,
	alertType: "success",
	alertMessage: "Example message",
};

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		changeAlertStatus: (state, action) => {
			state.isAlert = action.payload;
		},
		setAlert: (state, action) => {
			const { message, type } = action.payload;
			state.isAlert = true;
			state.alertType = type;
			state.alertMessage = message;
		},
	},
});

export const { changeAlertStatus, setAlert } = alertSlice.actions;
export default alertSlice.reducer;
