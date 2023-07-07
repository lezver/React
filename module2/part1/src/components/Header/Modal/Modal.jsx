import { ModalStyle, CloseBtn } from "./Modal.styled";
import { FcCancel } from "react-icons/fc";

export const Modal = ({ close }) => {
	return (
		<ModalStyle>
			<div>
				<CloseBtn type="button" onClick={close}>
					<FcCancel size={24} />
				</CloseBtn>
				<h2>Some Modal</h2>
			</div>
		</ModalStyle>
	);
};
