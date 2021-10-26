import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	types: [
		{
			typeName: "pizza",
			displayName: "Pizza",
		},
		{
			typeName: "soup",
			displayName: "Soup",
		},
		{
			typeName: "sandwich",
			displayName: "Sandwich",
		},
	],
};

const typesSlice = createSlice({
	name: "typesSlice",
	initialState,
	reducers: {},
});

// export const {} = typesSlice.actions;
export default typesSlice.reducer;
