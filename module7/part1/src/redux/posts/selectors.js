export const getPosts = (state) => ({
	items: state.posts.items,
	isLoading: state.posts.isLoading,
	error: state.posts.error,
});
