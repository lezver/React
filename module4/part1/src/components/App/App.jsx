import "./App.scss";
import {
	Clock,
	Form,
	SignupForm,
	ColorPicker,
	FirstPractice,
	FirstHooksModal,
	UserMenu,
	UserContext,
	colorPickerOptions,
	Counter,
	Counter1,
	FilterFriends,
} from "components";

export const App = () => {
	return (
		<>
			<h1>Module4 - Part1</h1>
			<FilterFriends />
			<Counter1 />
			<Clock />
			<Form />
			<Counter />
			<ColorPicker options={colorPickerOptions} />
			<SignupForm />
			<UserContext.Provider value={{ username: "Mango" }}>
				<UserMenu />
			</UserContext.Provider>
			<FirstHooksModal />
			<FirstPractice />
		</>
	);
};
