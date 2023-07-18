import { useSelector } from "react-redux";
import { selectColorTheme } from "redux/colorThemes/selectors";
import { selectLanguage } from "redux/switchLanguage/selectors";

export const Header = () => {
	const colorScheme = useSelector(selectColorTheme);
	const language = useSelector(selectLanguage);

	const style = {
		margin: "10px auto",
		width: "fit-content",
		padding: 20,
		color: colorScheme === true ? "black" : "white",
		backgroundColor: colorScheme === true ? "white" : "black",
	};

	return <div style={style}>Header language : {language}</div>;
};
