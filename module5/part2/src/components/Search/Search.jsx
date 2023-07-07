import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ value, onChange }) => {
	return (
		<label className="search">
			<input
				type="text"
				value={value}
				onChange={({ target: { value } }) => onChange(value)}
			/>
			<AiOutlineSearch />
		</label>
	);
};

export default Search;
