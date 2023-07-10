import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "redux/poducts/selectors";
import { addPoduct, deleteProduct, updateProduct } from "redux/poducts/actions";

export const Products = () => {
	const products = useSelector(getProducts);
	const dispatch = useDispatch();

	const handlerAddForm = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const price = e.target.elements.price.value;

		dispatch(addPoduct({ name, price }));

		e.target.reset();
	};
	const handlerUpdateForm = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const price = e.target.elements.price.value;

		dispatch(updateProduct({ name, price }));

		e.target.reset();
	};

	const deleteProductName = (name) => dispatch(deleteProduct({ name: name }));

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
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						<span>
							Name: {product.name}, Price: {product.price}
						</span>
						<button
							onClick={() => deleteProductName(product.name)}
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
