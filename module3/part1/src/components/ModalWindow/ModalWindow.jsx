import { Component } from "react";
import "./ModalWindow.scss";

import { FcAbout, FcCancel } from "react-icons/fc";

export class ModalWindow extends Component {
	state = {
		isHidden: false,
	};

	componentDidUpdate() {
		const { isHidden } = this.state;
		if (isHidden) {
			window.addEventListener("keydown", this.handleCloseModalWindow);
			window.addEventListener("click", this.handleCloseModalWindow);
		}
	}
	componentWillUnmount() {
		{
			window.removeEventListener("keydown", this.handleCloseModalWindow);
			window.removeEventListener("click", this.handleCloseModalWindow);
		}
	}

	handleCloseModalWindow = (e) => {
		e.preventDefault();

		if (e.code === "Escape") {
			this.handleModalWindow();
		}

		if (e.target.className === "modal__backdrop") {
			this.handleModalWindow();
		}
	};

	handleModalWindow = () => {
		this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
	};

	render() {
		const { isHidden } = this.state;

		return (
			<>
				<button
					className="modal__btn-open"
					type="button"
					onClick={this.handleModalWindow}
				>
					<FcAbout size={24} />
				</button>
				{isHidden && (
					<div className="modal__backdrop">
						<div className="modal__window">
							<button
								className="modal__close"
								type="button"
								onClick={this.handleModalWindow}
							>
								<FcCancel size={24} />
							</button>
						</div>
					</div>
				)}
			</>
		);
	}
}
