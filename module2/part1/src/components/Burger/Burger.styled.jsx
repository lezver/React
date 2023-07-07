import styled from "styled-components";

export const BurgerStyle = styled.div`
	margin: 0 auto;
	width: 250px;
	background-color: rgba(0, 0, 255, 0.392);
	display: flex;
	justify-content: center;
	padding: 24px 0;
	gap: 24px;
	border-radius: 8px;
	position: relative;
	margin-bottom: 150px;
	> button {
		font-size: 20px;
		background-color: rgba(85, 64, 43, 0.499);
		padding: 8px;
		border-radius: 4px;
	}
	> ul {
		position: absolute;
		list-style: none;
		width: 100%;

		padding: 0;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		transform: translateY(80%);
		> li {
			background-color: tomato;

			text-align: center;
			padding: 8px 0;
			border-radius: 4px;
		}
		> li:not(:last-child) {
			margin-bottom: 4px;
		}
	}
`;
