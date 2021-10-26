import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { MenuProps } from "../../App";

const classes = {
	box: {
		display: "flex",
		flexDirection: "column",
	},
};

const SoupInputs = ({ spiciness, setSpiciness }) => {
	const handleChangeSpiciness = (e) => {
		if ((e.target.value <= 10 && e.target.value > 0) || e.target.value === "") {
			setSpiciness(Number(e.target.value));
		}
	};

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
				<InputLabel id="spicinessLabel">Spiciness</InputLabel>
				<Select
					labelId="spicinessLabel"
					value={spiciness}
					label="Spiciness"
					onChange={handleChangeSpiciness}
					MenuProps={MenuProps}
				>
					{createMenuItems}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SoupInputs;
