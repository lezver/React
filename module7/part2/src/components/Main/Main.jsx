import { useDispatch, useSelector } from "react-redux";
import { selectColorTheme } from "redux/colorThemes/selectors";
import { changeTheme } from "redux/colorThemes/slice";
import { selectLanguage } from "redux/switchLanguage/selectors";
import { changeLanguage } from "redux/switchLanguage/slice";

export const Main = () => {
	const dispatch = useDispatch();
	const colorScheme = useSelector(selectColorTheme);
	const language = useSelector(selectLanguage);

	const style = {
		margin: "10px auto",
		width: "fit-content",
		padding: 20,
		color: colorScheme === true ? "black" : "white",
		backgroundColor: colorScheme === true ? "white" : "black",
	};

	return (
		<>
			<button
				type="button"
				style={{
					margin: "10px auto",
					width: "fit-content",
					display: "block",
				}}
				onClick={() => dispatch(changeTheme(!colorScheme))}
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
				onClick={() =>
					dispatch(changeLanguage(language === "ua" ? "en" : "ua"))
				}
			>
				Switch language
			</button>
			<div style={style}>Main language : {language}</div>
		</>
	);
};
