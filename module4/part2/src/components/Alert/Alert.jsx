import { useCustomContext } from "components/Context/FirstContext";
import { useWindowSize } from "components";
export const Alert = () => {
	const test = useWindowSize();

	const { toggleAlert, toggle } = useCustomContext();
	return (
		<>
			{toggleAlert && <p>Messege</p>}
			<h2>{`width: ${useWindowSize().width} & height: ${
				useWindowSize().height
			}`}</h2>
			<button type="button" onClick={toggle}>
				Test
			</button>
		</>
	);
};
