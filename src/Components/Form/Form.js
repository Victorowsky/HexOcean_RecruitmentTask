import {
	Button,
	Card,
	FormControl,
	InputLabel,
	LinearProgress,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuProps } from "../../App";
import { setAlert } from "../../store/alertSlice";
import PizzaInputs from "./PizzaInputs";
import SandwichInputs from "./SandwichInputs";
import SoupInputs from "./SoupInputs";

const useStyles = () => {
	return {
		card: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			maxWidth: "400px",
			color: "white",
			minHeight: "300px",
			padding: "15px",
			position: "relative",
			gap: "15px",
			overflow: "hidden",
			"@media(max-width:400px)": {
				height: "100vh",
				width: "100vw",
			},
		},
		box: {
			display: "flex",
		},
		form: {
			display: "flex",
			flexDirection: "column",
			gap: "15px",
			padding: "10px",
			width: "350px",
		},
		progress: {
			position: "absolute",
			bottom: "0",
			left: "0",
			width: "100%",
		},
	};
};

const formatTime = (time) => {
	return time < 10 ? `0${time}` : time;
};

const hoursFromMinutes = (time) => {
	const hours = formatTime(Math.floor(time / 60));
	const minutes = formatTime(time % 60);
	return { hours, minutes };
};

const fetchPostUrl = "https://frosty-wood-6558.getsandbox.com:443/dishes";

const Form = () => {
	const { types } = useSelector((state) => state.types);

	const [dish, setDish] = useState("");
	const [prepariationTime, setPrepariationTime] = useState("");
	const [type, setType] = useState("");
	const [spiciness, setSpiciness] = useState("");
	const [pizzaSlices, setPizzaSlices] = useState("");
	const [diameter, setDiameter] = useState("");
	const [breadSlices, setBreadSlices] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const classes = useStyles();

	const dispatch = useDispatch();

	const handleSelectType = (e) => {
		const selectedType = e.target.value;
		setPrepariationTime("");
		setType(selectedType);
	};

	const createTypesSelect = () => {
		return types.map((item) => {
			return (
				<MenuItem key={item.typeName} value={item.typeName}>
					{item.displayName}
				</MenuItem>
			);
		});
	};

	const selectTypes = () => {
		if (type === "pizza") {
			return (
				<PizzaInputs
					pizzaSlices={pizzaSlices}
					setPizzaSlices={setPizzaSlices}
					diameter={diameter}
					setDiameter={setDiameter}
				/>
			);
		} else if (type === "soup") {
			return <SoupInputs spiciness={spiciness} setSpiciness={setSpiciness} />;
		} else if (type === "sandwich") {
			return (
				<SandwichInputs
					breadSlices={breadSlices}
					setBreadSlices={setBreadSlices}
				/>
			);
		}
	};

	const handleChangePreparationTime = (e) => {
		if (e.target.value >= 0) {
			setPrepariationTime(e.target.value);
		}
	};

	const clearForm = () => {
		setDish("");
		setDiameter("");
		setBreadSlices("");
		setPizzaSlices("");
		setPrepariationTime("");
		setType("");
	};

	const handleValidateData = (e) => {
		e.preventDefault();
		const time = hoursFromMinutes(prepariationTime);
		const formatTime = `${time.hours}:${time.minutes}:00`;

		if (!dish) {
			return dispatch(
				setAlert({ type: "warning", message: "Please enter dish name" })
			);
		}

		if (type === "") {
			return dispatch(
				setAlert({ type: "warning", message: "Choose type of the dish" })
			);
		}

		if (type === "pizza") {
			if (!pizzaSlices) {
				return dispatch(
					setAlert({
						type: "warning",
						message: "Please enter number of slices",
					})
				);
			}
			if (!diameter) {
				return dispatch(
					setAlert({ type: "warning", message: "Please enter diameter" })
				);
			}
		}

		if (type === "soup" && !spiciness) {
			return dispatch(
				setAlert({ type: "warning", message: "Please enter spiciness scale" })
			);
		}

		if (type === "sandwich" && !breadSlices) {
			return dispatch(
				setAlert({ type: "warning", message: "Please enter number of slices" })
			);
		}

		if (!prepariationTime) {
			return dispatch(
				setAlert({ type: "warning", message: "Please enter preparation time" })
			);
		} else if (prepariationTime >= 6000) {
			return dispatch(
				setAlert({
					type: "warning",
					message: "Your preparation time is too long",
				})
			);
		}
		setIsLoading(true);

		fetch(fetchPostUrl, {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: dish,
				preparation_time: formatTime,
				type,
				no_of_slices: Number(pizzaSlices),
				diameter: Number(diameter),
				spiciness_scale: Number(spiciness),
				slices_of_bread: Number(breadSlices),
			}),
		})
			.then((res) => {
				if (!res.ok || res.status === 400) {
					throw new Error("Something went wrong!");
				} else {
					return res.json();
				}
			})
			.then((res) => {
				dispatch(
					setAlert({ type: "success", message: "You made your own dish!" })
				);
				clearForm();
			})
			.catch((err) => {
				dispatch(setAlert({ type: "error", message: err.message }));
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Card sx={classes.card}>
			{isLoading && <LinearProgress sx={classes.progress} color="primary" />}
			<Typography variant="h4" align="center">
				Create your own dish!
			</Typography>
			<form style={classes.form}>
				<TextField
					required
					label="Dish"
					placeholder="Spicy Chicken Pizza"
					value={dish}
					onChange={(e) => setDish(e.target.value)}
				/>
				<FormControl fullWidth>
					<InputLabel id="selectLabel">Type</InputLabel>
					<Select
						labelId="selectLabel"
						required
						displayEmpty
						defaultValue=""
						value={type}
						label={"Type"}
						MenuProps={MenuProps}
						onChange={(e) => handleSelectType(e)}
					>
						{createTypesSelect()}
					</Select>
				</FormControl>
				{selectTypes()}
				<TextField
					label="Preparation time"
					required
					placeholder={"30 (minutes)"}
					value={prepariationTime}
					type="number"
					onChange={handleChangePreparationTime}
					autoComplete={0}
				/>
				<Button onClick={handleValidateData} variant="outlined">
					Add dish
				</Button>
				<button
					style={{ display: "none" }}
					onClick={handleValidateData}
				></button>
			</form>
		</Card>
	);
};

export default Form;
