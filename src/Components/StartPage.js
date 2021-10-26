import { Button, Card, Typography } from "@mui/material";

const useStyles = () => {
	return {
		card: {
			width: "100%",
			maxWidth: "400px",
			height: "400px",
			padding: "15px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
	};
};

const StartPage = ({ setIsForm }) => {
	const classes = useStyles();

	const handleMakeAnOrder = () => {
		setIsForm(true);
	};

	return (
		<Card sx={classes.card}>
			<Typography variant="h4" align={"center"} mb={2}>
				Welcome!
			</Typography>
			<Button variant="contained" onClick={handleMakeAnOrder}>
				Make an order
			</Button>
		</Card>
	);
};

export default StartPage;
