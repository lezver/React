import styled from "styled-components";

export const Counter1Style = styled.div`
	background-color: tomato;
	width: fit-content;
	border-radius: 8px;
	padding: 24px;
	margin: 0 auto 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	> h2 {
		color: white;
		font-size: 30px;
		line-height: 1;
		margin: 0;
	}
	> span {
		font-size: 48px;
	}
	> div {
		display: flex;
		gap: 16px;
		> button {
			font-size: 20px;
			padding: 8px;
			outline: none;
			border: none;
			cursor: pointer;
			border-radius: 4px;
			text-transform: uppercase;
			transition: all 250ms;
			box-shadow: 0px 3px 5px black;

			&:active {
				transform: translateY(5%);
				box-shadow: 0px -3px 5px black;
			}
		}
		> button:first-child {
			color: white;
			background-color: rgb(0, 128, 0);
		}
		> button:last-child {
			color: black;
			background-color: red;
		}
	}
`;
