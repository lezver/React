import styled from "styled-components";

export const ItemsStyle = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 24px;
	> li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		background-color: azure;
		padding: 8px;
		border-radius: 4px;
		> button {
			font-size: 16px;
			padding: 4px;
		}
	}
`;
