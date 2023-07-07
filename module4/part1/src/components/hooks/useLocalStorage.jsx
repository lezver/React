import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(
		() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
	);

	useEffect(() => window.localStorage.setItem(key, JSON.stringify(value)));

	return [value, setValue];
};
