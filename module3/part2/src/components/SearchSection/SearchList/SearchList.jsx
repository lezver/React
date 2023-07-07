import { Component } from "react";
import "./SearchList.scss";

const SATUS = {
	IDLE: "idle",
	PENDING: "pending",
	RESOLVED: "resolved",
	REJECTED: "rejected",
	EMPTY: "empty",
};

export class SearchList extends Component {
	state = {
		data: [],
		status: SATUS.IDLE,
		error: null,
	};

	async componentDidUpdate(prevProps, prevState) {
		if (prevProps.searchText !== this.props.searchText) {
			try {
				const { search, searchText } = this.props;

				this.setState({ status: SATUS.PENDING });

				const response = await search(searchText);

				if (response.articles.length === 0) {
					return this.setState({ data: [], status: SATUS.EMPTY });
				}

				this.setState({ data: response.articles, status: SATUS.RESOLVED });
			} catch (error) {
				console.log(error);

				this.setState({ status: SATUS.REJECTED, error });
			}
		}
	}
	render() {
		const { data, status, error } = this.state;
		console.log(data);

		const shortData = data.length > 0 && data.slice(0, 19);

		if (status === SATUS.PENDING) {
			return <p className="search-section__loading">Loading...</p>;
		} else if (status === SATUS.RESOLVED) {
			return (
				<ul className="search-section__list">
					{shortData.map((item) => (
						<li key={item.url}>
							<span>{item.title}</span>
						</li>
					))}
				</ul>
			);
		} else if (status === SATUS.EMPTY) {
			return <p className="search-section__loading"> Nathing found ...</p>;
		} else if (status === SATUS.REJECTED) {
			return (
				<p className="search-section__loading">Error : incorrects value </p>
			);
		}
	}
}
