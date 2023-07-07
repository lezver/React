import styled from "styled-components";

export const HeaderStyle = styled.header`
	max-width: 600px;
	background-color: rgba(76, 0, 130, 0.503);
	margin: 0 auto 50px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-y: hidden;
	> button {
		border: none;
		outline: none;
		background-color: transparent;
		> svg {
			cursor: pointer;
		}
	}
`;
