import styled from "styled-components";

const setBgColor = ({ value }) => {
	return value;
};

const setScale = ({ index, number }) => {
	if (index === number) return "scale(1.3)";
};

export const ColorPickerStyle = styled.div`
	border-radius: 8px;
	border: 1px solid black;
	width: fit-content;
	margin: 0 auto;
	padding: 24px;
	background-color: violet;
	margin-bottom: 50px;
	> h2 {
		font-size: 36px;
		text-align: center;
	}
	> p {
		margin-left: 50px;
		font-size: 18px;
	}
	> ul {
		list-style: none;
		display: flex;
		gap: 24px;
		padding: 0;
	}
`;

export const ColorBtn = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 4px;
	cursor: pointer;
	border: none;
	outline: none;
	transition: all 250ms;
	&:active {
		transform: scale(0.95);
	}
	&:hover {
		box-shadow: 0 0 5px 1px black;
	}
	transform: ${setScale};
	background-color: ${setBgColor};
`;
