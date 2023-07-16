import { useDispatch } from "react-redux";
import "./Posts.scss";
import { useEffect } from "react";
import { fetchPosts } from "redux/posts/operations";
import { PostsList } from "./index";

export const Posts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<section className="posts">
			<h2>Posts</h2>
			<PostsList />
		</section>
	);
};
