import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeAlertStatus } from "../store/alertSlice";

const Alert2 = () => {
	const { isAlert, alertType, alertMessage } = useSelector(
		(state) => state.alert
	);

	const dispatch = useDispatch();

	const handleCloseAlert = () => {
		dispatch(changeAlertStatus(false));
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			open={isAlert}
			autoHideDuration={3000}
			onClose={handleCloseAlert}
		>
			<Alert severity={alertType}>{alertMessage}</Alert>
		</Snackbar>
	);
};

export default Alert2;
