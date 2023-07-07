import { Component } from "react";
import { FcSurvey } from "react-icons/fc";
import { HeaderStyle } from "./Header.styled";
import { Logo } from "./Logo";
import { Modal } from "./Modal";

export class Header extends Component {
	state = {
		siShowModal: false,
	};

	opanModal = () => this.setState({ siShowModal: true });
	closeModal = () => this.setState({ siShowModal: false });

	render() {
		const { siShowModal } = this.state;
		return (
			<HeaderStyle>
				<Logo />
				{siShowModal && <Modal close={this.closeModal} />}
				<button type="button" onClick={this.opanModal}>
					<FcSurvey size={30} />
				</button>
			</HeaderStyle>
		);
	}
}
