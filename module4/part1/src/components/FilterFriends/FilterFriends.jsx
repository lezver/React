import { friends } from "components";
import { useState, useMemo } from "react";
import "./FilterFriends.scss";

export const FilterFriends = () => {
	const [count, setCount] = useState(0);
	const [friendsAll] = useState(friends);
	const [filter, setFilter] = useState("");

	const visibleFriends = useMemo(() => {
		console.log("filter friends" + Date.now());
		return friendsAll.filter((friend) => friend.toLowerCase().includes(filter));
	}, [filter, friendsAll]);

	return (
		<div className="filter-friends">
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				{count}
			</button>
			<h2>Friends</h2>
			<label>
				fiend friend:
				<input
					type="text"
					onChange={(e) => setFilter(e.target.value)}
					value={filter}
				/>
			</label>
			<ul>
				{visibleFriends.map((friend, index) => (
					<li key={index}>{friend}</li>
				))}
			</ul>
		</div>
	);
};
