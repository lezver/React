export const PostsItem = ({ item }) => {
	return (
		<li>
			<p>Title: {item.title}</p>
			<span>Body: {item.body}</span>
		</li>
	);
};
