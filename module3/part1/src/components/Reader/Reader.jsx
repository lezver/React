import "./Reader.scss";
import { Component } from "react";
import { Controls } from "./Controls";
import { Progress } from "./Progress";
import { Publication } from "./Publication";
import PropTypes from "prop-types";

const LS_KEY = "reader__item_index";

export class Reader extends Component {
	state = {
		publicationIndex: 0,
	};

	componentDidMount() {
		if (localStorage.getItem(LS_KEY)) {
			this.setState({ publicationIndex: Number(localStorage.getItem(LS_KEY)) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.publicationIndex !== this.state.publicationIndex) {
			localStorage.setItem(LS_KEY, this.state.publicationIndex);
		}
	}

	handleChange = (value) => {
		this.setState((prevState) => ({
			publicationIndex: prevState.publicationIndex + value,
		}));
	};

	render() {
		const { publicationIndex } = this.state;
		const { publications } = this.props;
		const currenItem = publications[publicationIndex];
		const current = publicationIndex + 1;
		const total = publications.length;

		return (
			<div className="reader">
				<Controls
					handleChange={this.handleChange}
					current={current}
					total={total}
				/>
				<Progress total={total} current={current} />
				<Publication currentItem={currenItem} />
			</div>
		);
	}
}

Reader.propTypes = {
	publications: PropTypes.array.isRequired,
};
