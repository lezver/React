import "./ArticleList.scss";

export const ArticleList = ({ articles }) => {
	return (
		<ul>
			{articles.map(({ objectID, title, url }) => (
				<li key={objectID}>
					<a href={url} target="_blanck" rel="noreferrer noopener">
						{title}
					</a>
				</li>
			))}
		</ul>
	);
};
