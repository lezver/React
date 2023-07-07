import { Link, useLocation } from "react-router-dom";
import { Si4Chan } from "react-icons/si";
import "./ProductList.scss";

const ProductList = ({ products }) => {
	const location = useLocation();

	return (
		<ul className="container">
			{products.map(({ id, name }) => (
				<li key={id}>
					<Link to={`${id}`} state={{ form: location }}>
						<Si4Chan />
						<h3>{name}</h3>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ProductList;
