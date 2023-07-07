import styled from "styled-components";

export const ModalStyle = styled.div`
	background-color: rgba(76, 0, 130, 0.508);
	position: absolute;

	z-index: 99;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	> div {
		padding: 24px;
		max-width: 85vh;
		background-color: white;
		width: fit-content;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		position: fixed;
	}
`;
export const CloseBtn = styled.button`
	outline: none;
	border: none;
	background-color: transparent;
	margin-left: auto;
	display: block;
	> svg {
		cursor: pointer;
	}
`;
