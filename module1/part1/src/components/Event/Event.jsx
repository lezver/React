import { Card, EventName, Info, Chip } from "./Event.styled";
import PropTypes from "prop-types";
import {
	FaMapMarkerAlt,
	FaUserAlt,
	FaCalendarAlt,
	FaClock,
} from "react-icons/fa";
import { formatEventStart, formatEventDuration, iconSize } from "components";

export const Event = ({ name, location, speaker, type, start, end }) => {
	const formattedStartDate = formatEventStart(start);
	const leftDate = formatEventDuration(start, end);

	return (
		<Card>
			<EventName>{name}</EventName>
			<Info>
				<FaMapMarkerAlt size={iconSize.lg} />
				{location}
			</Info>
			<Info>
				<FaUserAlt size={iconSize.md} />
				{speaker}
			</Info>
			<Info>
				<FaCalendarAlt size={iconSize.sm} />
				{formattedStartDate}
			</Info>
			<Info>
				<FaClock size={iconSize.lg} />
				{leftDate}
			</Info>
			<Chip eventType={type}>{type}</Chip>
		</Card>
	);
};

Event.propTypes = {
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	speaker: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired,
};
