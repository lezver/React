import axios from "axios";

const URL = "https://6487205dbeba629727900534.mockapi.io";

export const addNote = async (values) => {
	const response = await axios.post(`${URL}/notes`, values);

	return response.data;
};

export const getNotes = async () => {
	const response = await axios.get(`${URL}/notes`);

	return response.data;
};

export const deleteNote = async (id) => {
	const response = await axios.delete(`${URL}/notes/${id}`);

	return response.data;
};

export const updateNote = async (newNote) => {
	const response = await axios.put(`${URL}/notes/${newNote.id}`, newNote);

	return response.data;
};

const SEARCH__SECTION_URL = "https://newsapi.org/v2/everything?";
const SEARCH__SECTION_KEY = "apiKey=d41d518926524bb5b39a5784c858803b";

export const search = async (value) => {
	const response = await axios.get(
		`${SEARCH__SECTION_URL}q=${value}&${SEARCH__SECTION_KEY}`
	);

	return response.data;
};
