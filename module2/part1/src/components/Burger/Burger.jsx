import { Component } from "react";
import { BurgerStyle } from "./Burger.styled";
import { Menu } from "./Menu";

export class Burger extends Component {
	state = {
		visible: false,
	};

	toggle = () => {
		this.setState((prevState) => ({ visible: !prevState.visible }));
	};

	render() {
		return (
			<BurgerStyle>
				<button type="button" onClick={this.toggle}>
					{this.state.visible ? "Hade" : "Show"}
				</button>
				{this.state.visible && <Menu />}
			</BurgerStyle>
		);
	}
}
