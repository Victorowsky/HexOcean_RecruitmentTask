import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsForm } from "../store/formSlice";

const useStyles = (isForm) => {
	return {
		box: {
			display: "flex",
			flexDirection: "column",
			width: "400px",
			height: "100%",
		},
	};
};

const StartPage = () => {
	const dispatch = useDispatch();

	const handleMakeAnOrder = () => {
		dispatch(toggleIsForm());
	};

	const { isForm } = useSelector((state) => state.form);

	const classes = useStyles(isForm);

	return (
		<Box sx={classes.box}>
			<Typography variant="h4" align={"center"} mb={2}>
				Welcome!
			</Typography>
			<Button variant="contained" onClick={handleMakeAnOrder}>
				Make an order
			</Button>
		</Box>
	);
};

export default StartPage;
