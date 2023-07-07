import "./Progress.scss";
import PropTypes from "prop-types";

export const Progress = ({ total, current }) => {
	return (
		<p className="reader__progress">
			{current}/{total}
		</p>
	);
};

Progress.propTypes = {
	current: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};
