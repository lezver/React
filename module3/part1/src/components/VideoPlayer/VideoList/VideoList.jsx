import "./VideoList.scss";

export const VideoList = ({ videos, onSelect }) => {
	return (
		<ul className="video-player__list">
			{videos.map(({ id, link }) => (
				<li key={id}>
					<button type="button" onClick={() => onSelect(link)}>
						{link}
					</button>
				</li>
			))}
		</ul>
	);
};
