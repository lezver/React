import { useSearchParams } from "react-router-dom";
import "./Products.scss";
import { getProducts } from "fakeAPI";
import ProductList from "components/ProductList/ProductList";
import Search from "components/Search/Search";

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const productName = searchParams.get("value") ?? "";

	const visibleProducts = getProducts().filter((product) =>
		product.name.toLowerCase().includes(productName.toLowerCase())
	);

	const updateQueryString = (value) =>
		setSearchParams(value !== "" ? { value } : {});

	return (
		<div className="products">
			<Search value={productName} onChange={updateQueryString} />
			<ProductList products={visibleProducts} />
		</div>
	);
};

export default Products;
