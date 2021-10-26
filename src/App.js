import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Alert from "./Components/Alert";
import Form from "./Components/Form/Form";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

// styles for Select => MenuItem
export const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 48 * 4.5 + 8,
		},
	},
};

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<div className="app">
				<Form />

				<Alert />
			</div>
		</ThemeProvider>
	);
}

export default App;
