import { ThreeCircles } from "react-loader-spinner";
import "./Loader.scss";

const Loader = () => {
	return (
		<div className="loader">
			<ThreeCircles
				height="100"
				width="100"
				color="#172e17"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="three-circles-rotating"
				outerCircleColor=""
				innerCircleColor=""
				middleCircleColor=""
			/>
		</div>
	);
};

export default Loader;
