import { Container, Header, Main } from "./App.styled";
import { PageTitle, EventBoard, upcomingEvents } from "components";

export const App = () => {
	return (
		<Container>
			<Header>
				<PageTitle text="24th Core Worlds Coalition Conference" />
			</Header>
			<Main>
				<EventBoard events={upcomingEvents} />
			</Main>
		</Container>
	);
};
