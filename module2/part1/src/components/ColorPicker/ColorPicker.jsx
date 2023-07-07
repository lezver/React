import { Component } from "react";
import { ColorPickerStyle, ColorBtn } from "./ColorPicker.styled";

export class ColorPicker extends Component {
	state = {
		activeOptionIdx: 0,
	};

	setActiveIndex = (index) => {
		this.setState({ activeOptionIdx: index });
	};

	render() {
		const { title, text, colors } = this.props;
		const { activeOptionIdx } = this.state;
		const { label } = colors[activeOptionIdx];

		return (
			<ColorPickerStyle>
				<h2>{title}</h2>
				<p>
					{text} {label}
				</p>
				<ul>
					{colors.map(({ label, color }, index) => {
						return (
							<li key={label}>
								<ColorBtn
									index={index}
									number={activeOptionIdx}
									type="button"
									value={color}
									onClick={() => this.setActiveIndex(index)}
								/>
							</li>
						);
					})}
				</ul>
			</ColorPickerStyle>
		);
	}
}
