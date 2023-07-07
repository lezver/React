import { Component } from "react";
import "./Search.css";

export class Search extends Component {
	state = {
		value: "",
		select: "",
	};

	handleChoose = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};

	displaySeactResults = () => {
		const { value, select } = this.state;
		const { products } = this.props;

		const filteredProducts = products.filter(
			({ name, type }) =>
				name.toLowerCase().includes(value.toLowerCase()) && type === select
		);

		return filteredProducts.map(({ id, name, price, quantity }) => {
			return (
				<li key={id}>
					<h2>{name}</h2>
					<p>price: {price}</p>
					<p>quantity: {quantity}</p>
				</li>
			);
		});
	};

	handleReset = () => {
		this.setState({
			value: "",
			select: "",
		});
	};

	buildTypeOptions = () => {
		const { products } = this.props;

		const uniqTypes = products
			.map(({ type }) => type)
			.filter((type, index, arr) => arr.indexOf(type) === index);

		return uniqTypes.map((type, index) => (
			<option key={index} value={type}>
				{type}
			</option>
		));
	};

	render() {
		const { value, select } = this.state;
		return (
			<section>
				<h1>Search products:</h1>
				<div>
					<label>
						<input
							type="text"
							name="value"
							value={value}
							onChange={this.handleChoose}
						/>
					</label>
					<label>
						Choose your type:
						<select name="select" value={select} onChange={this.handleChoose}>
							<option value="...">...</option>
							{this.buildTypeOptions()}
						</select>
					</label>
					<button type="button" onClick={this.handleReset}>
						Reset
					</button>
				</div>
				{value.length >= 2 && <ul>{this.displaySeactResults()}</ul>}
			</section>
		);
	}
}
