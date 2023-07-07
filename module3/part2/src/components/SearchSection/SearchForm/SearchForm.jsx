import "./SearchForm.scss";
import { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export class SearchForm extends Component {
	state = {
		value: "",
	};

	handleForm = (e) => {
		e.preventDefault();
		const { value } = this.state;

		this.props.handelSearch(value);

		setTimeout(() => this.setState({ value: "" }), 150);
	};

	editSearch = ({ currentTarget: { value } }) => this.setState({ value });

	render() {
		const { value } = this.state;
		return (
			<form
				className="search-section__form"
				role="search"
				onSubmit={this.handleForm}
			>
				<label>
					Srearch:
					<input
						type="text"
						name="search"
						value={value}
						onChange={this.editSearch}
					/>
				</label>
				<button type="submit" disabled={value === "" ? true : false}>
					<AiOutlineSearch size={24} />
				</button>
			</form>
		);
	}
}
