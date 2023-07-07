import { useRef } from "react";
import "./Player.scss";

export const Player = ({ source }) => {
	const playerRef = useRef();
	const play = () => playerRef.current.play();
	const pause = () => playerRef.current.pause();
	return (
		<div className="player">
			<video ref={playerRef} src={source}>
				Sorry, your browser doesn't support embedded videos.
			</video>
			<button type="button" onClick={play}>
				Play
			</button>
			<button type="button" onClick={pause}>
				Pause
			</button>
		</div>
	);
};
