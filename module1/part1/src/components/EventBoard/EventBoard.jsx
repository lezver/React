import { EventBoardStyled } from "./EventBoard.styled";
import { Event } from "components";

export const EventBoard = ({ events }) => {
	return (
		<EventBoardStyled>
			{events.map(({ name, location, speaker, type, time }) => (
				<Event
					key={name}
					name={name}
					location={location}
					speaker={speaker}
					type={type}
					start={time.start}
					end={time.end}
				/>
			))}
		</EventBoardStyled>
	);
};
