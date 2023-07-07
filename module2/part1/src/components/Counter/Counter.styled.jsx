import styled from "styled-components";

export const CounterBox = styled.div`
	width: fit-content;
	margin: 50px auto;
	border: 1px solid black;
	border-radius: 10px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	background-color: azure;
	> span {
		font-size: 36px;
		color: orange;
	}
	> div {
		display: flex;
		gap: 24px;
		> button {
			padding: 8px;
			border-radius: 8px;
			text-transform: uppercase;
			color: red;
			font-size: 18px;
		}
		> button:last-child {
			color: green;
		}
	}
`;
