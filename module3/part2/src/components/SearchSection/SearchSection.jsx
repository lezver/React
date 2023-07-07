import "./SearchSection.scss";
import { Component } from "react";
import { SearchForm } from "./SearchForm";
import { SearchList } from "./SearchList";
import { search } from "components/Services";

export class SearchSection extends Component {
	state = {
		searchText: "",
	};

	handelSearch = (searchText) => {
		this.setState({ searchText });
	};

	render() {
		const { searchText } = this.state;

		return (
			<section className="search-section">
				<SearchForm handelSearch={this.handelSearch} />
				<SearchList searchText={searchText} search={search} />
			</section>
		);
	}
}
