import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { Box } from "@mui/system";
import { MenuProps } from "../../App";

const classes = {
	box: {
		display: "flex",
		flexDirection: "column",
	},
};

const SandwichInputs = ({ breadSlices, setBreadSlices }) => {
	let createMenuItems = [];

	for (let index = 0; index < 10; index++) {
		createMenuItems.push(
			<MenuItem key={index} value={index + 1}>
				{index + 1}
			</MenuItem>
		);
	}

	return (
		<Box sx={classes.box}>
			<FormControl fullWidth>
				<InputLabel id="breadSlicesLabel">Slices of bread</InputLabel>
				<Select
					labelId="breadSlicesLabel"
					value={breadSlices}
					label="Slices of bread"
					onChange={(e) => setBreadSlices(e.target.value)}
					MenuProps={MenuProps}
				>
					{createMenuItems}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SandwichInputs;
