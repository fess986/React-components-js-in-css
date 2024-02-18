import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	padding-left: ${props => props.theme.pagePadding};
	padding-right:  ${props => props.theme.pagePadding};
	width:  ${props => props.theme.pageWidth};
	margin: 0 auto;
	position: relative;
	height: 80px;
	padding-top: 0;
	padding-bottom: 0;
	justify-content: space-between;
	background-color: ${props => props.theme.colorWhite};
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
		0 0 1px rgba(0, 0, 0, 0.04);
	align-items: center;
	z-index: 5;
	box-sizing: border-box;
`;

export default StyledHeader;