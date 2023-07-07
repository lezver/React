import "./Publication.scss";
import PropTypes from "prop-types";

export const Publication = ({ currentItem: { title, text } }) => {
	return (
		<article className="reader__publication">
			<h2>{title}</h2>
			<p>{text}</p>
		</article>
	);
};

Publication.propTypes = {
	currentItem: PropTypes.object.isRequired,
};
