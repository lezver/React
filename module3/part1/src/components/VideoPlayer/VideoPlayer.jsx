import "./VideoPlayer.scss";
import { Component } from "react";
import { VideoList } from "./VideoList";
import { Player } from "./Player";

export class VideoPlayer extends Component {
	state = {
		selectedVideo: null,
	};

	onSelect = (link) => {
		this.setState({ selectedVideo: link });
	};

	render() {
		const { selectedVideo } = this.state;
		const { videos } = this.props;

		return (
			<div className="video-player">
				<h2>Video Player</h2>
				<VideoList videos={videos} onSelect={this.onSelect} />
				<h3>Selected video: {selectedVideo}</h3>
				<Player url={selectedVideo} />
			</div>
		);
	}
}
