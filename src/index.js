import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./components/theme/default";

import App from "./components/App/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
