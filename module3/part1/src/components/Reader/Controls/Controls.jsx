import "./Controls.scss";
import PropTypes from "prop-types";

export const Controls = ({ handleChange, current, total }) => {
	return (
		<section className="reader__controls">
			<button
				type="button"
				onClick={() => handleChange(-1)}
				disabled={current === 1}
			>
				Previous
			</button>
			<button
				type="button"
				onClick={() => handleChange(1)}
				disabled={current === total}
			>
				Next
			</button>
		</section>
	);
};

Controls.propTypes = {
	handleChange: PropTypes.func.isRequired,
	current: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};
