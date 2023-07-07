import styled from "styled-components";

export const ItemStyle = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 48px;
	border-bottom: 1px solid black;

	> div {
		display: flex;
		align-items: center;
		gap: 16px;
		> label {
			> input {
				margin: 0;
				display: block;
				cursor: pointer;
			}
		}
	}

	> button {
		border: none;
		outline: none;
		background-color: transparent;
		> svg {
			cursor: pointer;
		}
	}
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`;
