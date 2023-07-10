import { useSelector } from "react-redux";
import { getColorTheme } from "redux/colorThemes/selectors";
import { getLanguage } from "redux/switchLanguage/selectors";

export const Header = () => {
	const colorScheme = useSelector(getColorTheme);
	const language = useSelector(getLanguage);

	const style = {
		margin: "10px auto",
		width: "fit-content",
		padding: 20,
		color: colorScheme === true ? "black" : "white",
		backgroundColor: colorScheme === true ? "white" : "black",
	};

	return <div style={style}>Header language : {language}</div>;
};
