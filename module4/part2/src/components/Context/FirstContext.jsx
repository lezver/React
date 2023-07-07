import React, { useContext, useState } from "react";

const ContextAlert = React.createContext();

export const useCustomContext = () => useContext(ContextAlert);

export const FirstContext = ({ children }) => {
	const [toggleAlert, setToggleAlert] = useState(false);

	const toggle = () => setToggleAlert(!toggleAlert);
	return (
		<ContextAlert.Provider value={{ toggle, toggleAlert }}>
			{children}
		</ContextAlert.Provider>
	);
};
