import "./CloseButton.css";
import { RiCloseCircleLine } from "react-icons/ri";

export const CloseButton = ({ closeBtn }) => {
	return (
		<button className="close-btn" type="button">
			<RiCloseCircleLine size={20} onClick={() => closeBtn()} />
		</button>
	);
};
