import "./Article.scss";
import axios from "axios";
import { Component } from "react";
import { fetchArticlesWithQuery } from "components/api/api";
import { ArticleList } from "./ArticleList";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export class Article extends Component {
	state = {
		articles: [],
		isLoading: false,
		error: null,
	};

	async componentDidMount() {
		this.setState({ isLoading: true });

		try {
			const articles = await fetchArticlesWithQuery("react");
			this.setState({ articles });

			//  or

			// const response = await axios.get("/search?query=react");
			// this.setState({ articles: response.data.hits });
		} catch (error) {
			this.setState({ error });
		} finally {
			this.setState({ isLoading: false });
		}
	}

	render() {
		const { articles, isLoading, error } = this.state;

		return (
			<section className="article">
				{error && <p>Woops, something went wrong: {error.message}</p>}
				{isLoading && <p>Loading ...</p>}
				{articles.length > 0 && <ArticleList articles={articles} />}
			</section>
		);
	}
}
