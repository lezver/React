import { useSelector } from "react-redux";
import { PostsItem } from "../index";
import { getPosts } from "redux/posts/selectors";

export const PostsList = () => {
	const { items, isLoading, error } = useSelector(getPosts);

	if (isLoading) {
		return "Loading! Spinner...";
	} else if (error) {
		return "Error" + error;
	} else {
		return (
			<ul>
				{items.slice(0, 10).map((item) => (
					<PostsItem key={item.id} item={item} />
				))}
			</ul>
		);
	}
};
