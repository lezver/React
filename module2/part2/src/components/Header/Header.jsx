import { Component } from "react";
import "./Header.css";
import { RiHome3Line, RiWindowsFill } from "react-icons/ri";
import { FirstForm } from "../FirstForm";
import { SecondForm } from "../SecondForm";
import { nanoid } from "nanoid";

export class Header extends Component {
	state = {
		isVisibleFirsForm: false,
		isVisibleSecondForm: false,
	};

	handleIsOpenFirsForm = () => {
		this.setState((prevState) => ({
			isVisibleFirsForm: !prevState.isVisibleFirsForm,
		}));
	};
	handleIsOpenSecondForm = () => {
		this.setState((prevState) => ({
			isVisibleSecondForm: !prevState.isVisibleSecondForm,
		}));
	};

	getDataForm = (data) => {
		const newUser = {
			...data,
			id: nanoid(),
		};
		console.log(newUser);
	};

	render() {
		const { isVisibleFirsForm, isVisibleSecondForm } = this.state;
		return (
			<header className="header">
				<a className="header__logo" href="index.html">
					<RiHome3Line size={36} />
				</a>

				{isVisibleFirsForm && (
					<div className="modal-window">
						<FirstForm
							onSubmitForm={this.getDataForm}
							closeBtn={this.handleIsOpenFirsForm}
						/>
					</div>
				)}

				{isVisibleSecondForm && (
					<div className="modal-window">
						<SecondForm
							onSubmitForm={this.getDataForm}
							closeBtn={this.handleIsOpenSecondForm}
						/>
					</div>
				)}

				<div>
					<button type="button">
						<RiWindowsFill size={24} onClick={this.handleIsOpenFirsForm} />
					</button>
					<button type="button">
						<RiWindowsFill size={24} onClick={this.handleIsOpenSecondForm} />
					</button>
				</div>
			</header>
		);
	}
}
