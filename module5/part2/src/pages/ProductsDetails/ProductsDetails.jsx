import { Link, useLocation, useParams } from "react-router-dom";
import "./ProductsDetails.scss";
import { getProductById } from "fakeAPI";
import { SiAlliedmodders } from "react-icons/si";

const ProductsDetails = () => {
	const { id } = useParams();
	const { state } = useLocation();
	const product = getProductById(id);

	return (
		<div className="products-details">
			<Link className="back" to={state?.from ?? "/products"}>
				Back to products
			</Link>
			<h3>
				Product - {product.name} - {id}
			</h3>
			<SiAlliedmodders size={200} />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos
				officiis eum reiciendis aliquid eaque inventore cum numquam! Ullam
				explicabo minima quas!
			</p>
		</div>
	);
};

export default ProductsDetails;
