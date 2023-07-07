import { Component } from "react";
import { StyledPlayer } from "./Player.styled";

export class Player extends Component {
	state = {
		isVideoLoaded: false,
	};

	componentDidUpdate(nextPrors, nextState) {
		const { url } = this.props;
		if (url !== nextPrors.url) {
			this.setState({ isVideoLoaded: false });
		}
	}

	render() {
		const { isVideoLoaded } = this.state;
		const { url } = this.props;

		const showLoader = url && !isVideoLoaded;
		const playerSizt = isVideoLoaded ? "100%" : 0;

		return (
			<>
				{showLoader && <h4>Video download ...</h4>}
				{url && (
					<StyledPlayer
						url={url}
						width={playerSizt}
						onReady={() => this.setState({ isVideoLoaded: true })}
						controls
					/>
				)}
			</>
		);
	}
}
