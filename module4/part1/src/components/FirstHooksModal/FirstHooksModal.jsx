import "./FirstHooksModal.scss";
import { useToggle } from "components";

export const FirstHooksModal = () => {
	const { isOpen, open, close } = useToggle();

	return (
		<>
			<button type="button" onClick={open}>
				Open Modal
			</button>
			{isOpen && (
				<div className="backdrop">
					<div className="modal-window">
						<button type="button" onClick={close}>
							Close Modal
						</button>
					</div>
				</div>
			)}
		</>
	);
};
