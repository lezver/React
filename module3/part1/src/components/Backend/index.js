import publications from "./publications";
import videos from "./videos";
import toDoBase from "./toDoBase";
import axios from "axios";

const BACE_URL = "https://6487205dbeba629727900534.mockapi.io/products";

const addNewProduct = async (product) => {
	const response = await axios.post(`${BACE_URL}`, product);

	return response.data;
};

const getProducts = async () => {
	const response = await axios.get(BACE_URL);

	return response.data;
};

const deleteProduct = async (productId) => {
	const response = await axios.post(`${BACE_URL}/${productId}`);

	return response.data;
};

const editProduct = async (newProduct) => {
	const response = await axios.put(`${BACE_URL}/${newProduct.id}`, newProduct);

	return response.data;
};

export {
	publications,
	videos,
	toDoBase,
	addNewProduct,
	getProducts,
	deleteProduct,
	editProduct,
};
