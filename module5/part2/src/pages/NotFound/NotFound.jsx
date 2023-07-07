import { Link, useNavigate } from "react-router-dom";
import "./NotFound.scss";
import { useEffect } from "react";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => navigate("/", { replase: true }), 5000);
	}, []);
	return (
		<div className="not-found">
			<Link to="/"> back to Home</Link>
			NotFound
		</div>
	);
};

export default NotFound;
