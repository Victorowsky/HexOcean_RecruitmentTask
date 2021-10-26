import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MenuProps } from "../../App";

const classes = {
	box: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "15px",
	},
};

const PizzaInputs = ({
	pizzaSlices,
	setPizzaSlices,
	diameter,
	setDiameter,
}) => {
	let createPizzaSlicesMenuItems = [];
	let createDiameterMenuItems = [];

	const handleChangeDiameter = (e) => {
		if (e.target.value >= 0 && e.target.value <= 100)
			setDiameter(Number(e.target.value));
	};

	for (let index = 0; index < 18; index++) {
		createPizzaSlicesMenuItems.push(
			<MenuItem value={index + 1}>{index + 1}</MenuItem>
		);
	}

	for (let index = 0; index < 100; index++) {
		createDiameterMenuItems.push(
			<MenuItem value={index + 1}>{index + 1}&#8451;</MenuItem>
		);
	}
	return (
		<Box sx={classes.box}>
			<FormControl fullWidth>
				<InputLabel id="pizzaSlicesLabel">Number of slices</InputLabel>
				<Select
					labelId="pizzaSlicesLabel"
					value={pizzaSlices}
					label="Number of slices"
					onChange={(e) => setPizzaSlices(Number(e.target.value))}
					MenuProps={MenuProps}
				>
					{createPizzaSlicesMenuItems}
				</Select>
			</FormControl>
			<FormControl fullWidth>
				<InputLabel id="diameterLabel">Diameter</InputLabel>
				<Select
					labelId="diameterLabel"
					value={diameter}
					label="Diameter"
					onChange={handleChangeDiameter}
					MenuProps={MenuProps}
				>
					{createDiameterMenuItems}
				</Select>
			</FormControl>
		</Box>
	);
};

export default PizzaInputs;
