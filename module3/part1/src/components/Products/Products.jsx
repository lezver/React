import "./Products.scss";

import { Component } from "react";
import {
	addNewProduct,
	getProducts,
	deleteProduct,
	editProduct,
} from "components";

export class Products extends Component {
	state = {
		products: [],
		productsWatch: [],
		isLoading: false,
		page: 1,
	};

	async componentDidMount() {
		const { products } = this.state;
		if (products) {
			this.setState({ isLoading: true });

			const getProductsWithServer = await getProducts();

			this.setState({
				products: getProductsWithServer,
				isLoading: false,
				productsWatch: getProductsWithServer.slice(0, 5),
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.page !== this.state.page) {
			const from = (this.state.page - 1) * 5;
			const to = from + 5;
			this.setState({ productsWatch: this.state.products.slice(from, to) });
		}
	}

	editPage = (edit) => {
		this.setState((prevState) => ({ page: prevState.page + edit }));
	};

	render() {
		const { productsWatch, products, isLoading, page } = this.state;
		const maxPage = products.length / 5;
		return (
			<section className="products">
				<h2>List of Products:</h2>
				{isLoading ? (
					<p>Loading ...</p>
				) : (
					<>
						<ul>
							{productsWatch.map(({ id, name, price }) => (
								<li key={id}>
									<span>
										{name} - {price}$
									</span>
								</li>
							))}
						</ul>
						<span>
							Page: {page} / {maxPage}
						</span>
						<div>
							<button
								type="button"
								onClick={() => this.editPage(-1)}
								disabled={page === 1}
							>
								-
							</button>
							<button
								type="button"
								onClick={() => this.editPage(1)}
								disabled={page === maxPage}
							>
								+
							</button>
						</div>
					</>
				)}
			</section>
		);
	}
}
