export const selectProducts = ({ products: { products } }) => products;

export const selectAllProductsPrice = (state) => {
	const products = selectProducts(state);

	return products.reduce((acc, { price }) => acc + price, 0);
};
