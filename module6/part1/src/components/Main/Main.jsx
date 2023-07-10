import { useDispatch, useSelector } from "react-redux";
import { getColorTheme } from "redux/colorThemes/selectors";
import { setColorTheme } from "redux/colorThemes/actions";
import { setLanguage } from "redux/switchLanguage/actions";
import { getLanguage } from "redux/switchLanguage/selectors";

export const Main = () => {
	const colorScheme = useSelector(getColorTheme);
	const language = useSelector(getLanguage);
	const dispatch = useDispatch();

	const style = {
		margin: "10px auto",
		width: "fit-content",
		padding: 20,
		color: colorScheme === true ? "black" : "white",
		backgroundColor: colorScheme === true ? "white" : "black",
	};

	const handleThemeSwitch = () => dispatch(setColorTheme(!colorScheme));
	const handleLanguage = () =>
		dispatch(setLanguage(language === "ua" ? "en" : "ua"));

	return (
		<>
			<button
				type="button"
				style={{
					margin: "10px auto",
					width: "fit-content",
					display: "block",
				}}
				onClick={handleThemeSwitch}
			>
				Switcher
			</button>
			<button
				type="button"
				style={{
					margin: "10px auto",
					width: "fit-content",
					display: "block",
				}}
				onClick={handleLanguage}
			>
				Switch language
			</button>
			<div style={style}>Main language : {language}</div>
		</>
	);
};
