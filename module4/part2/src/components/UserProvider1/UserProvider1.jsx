import { UserMenu } from "./UserMenu";
import { UserProvider } from "components";

export const UserProvider1 = () => {
	return (
		<UserProvider>
			<UserMenu />
		</UserProvider>
	);
};
