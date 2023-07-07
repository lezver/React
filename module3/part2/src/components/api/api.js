import axios from "axios";

const URL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithQuery = async (searchQuery) => {
	const response = await axios.get(`${URL}/search?query=${searchQuery}`);
	return response.data.hits;
};
