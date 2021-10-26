import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isForm: false,
	name: null,
	type: null,
	no_of_slices: null,
	diameter: null,
	preparation_time: null,
};

const formSlice = createSlice({
	name: "formSlice",
	initialState,
	reducers: {
		toggleIsForm: (state) => {
			state.isForm = !state.isForm;
		},
		setFormData: (state, action) => {
			// const { name, value } = action.payload;
			// if (name === "type") {
			// 	state.formData = state.formData.filter((item) => item.name === "name");
			// }
			// const findField = state.formData.find((item) => item.name === name);
			// if (findField) {
			// 	findField.value = value;
			// } else {
			// 	state.formData.
			// }
		},
	},
});

export const { toggleIsForm, setFormData } = formSlice.actions;
export default formSlice.reducer;
