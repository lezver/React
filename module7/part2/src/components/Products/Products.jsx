import { useDispatch, useSelector } from "react-redux";
import {
	selectProducts,
	selectAllProductsPrice,
} from "redux/poducts/selectors";
import { addProduct, deleteProduct, updateProduct } from "redux/poducts/slice";

export const Products = () => {
	const products = useSelector(selectProducts);
	const allProductsPrice = useSelector(selectAllProductsPrice);
	const dispatch = useDispatch();

	const handlerAddForm = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const price = Number(e.target.elements.price.value);

		dispatch(addProduct({ name, price }));

		e.target.reset();
	};
	const handlerUpdateForm = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const price = e.target.elements.price.value;

		dispatch(updateProduct({ name, price }));

		e.target.reset();
	};

	return (
		<>
			<form onSubmit={handlerAddForm}>
				<input type="text" placeholder="product name" name="name" />
				<input type="text" placeholder="product price" name="price" />
				<button type="submit">Add</button>
			</form>
			<form onSubmit={handlerUpdateForm}>
				<input type="text" placeholder="product name" name="name" />
				<input type="text" placeholder="product price" name="price" />
				<button type="submit">Update product</button>
			</form>
			<h2>total price: {allProductsPrice}</h2>
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						<span>
							Name: {product.name}, Price: {product.price}
						</span>
						<button
							onClick={() => dispatch(deleteProduct(product.name))}
							type="button"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
