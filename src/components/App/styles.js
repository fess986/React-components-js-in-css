import { createGlobalStyle } from "styled-components";

// тут мы создаём глобальные стили для всего проекта, и экспортируем в их в App.js, где и активируем
const GlobalStyles = createGlobalStyle`
html {
	height: 100%;
}

body,
html {
	margin: 0;
} 

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => {
		// props.theme хранит значения наших констант которые мы пробросили через ThemeProvider
		console.log(props);
		return props.theme.fontSizeDefault;
	}};
  line-height: 27px;
  font-weight: 400;
  color: ${(props1) => props1.theme.colorBlackForText};
}

a {
	text-decoration: none;
}
`;

export default GlobalStyles;
