import { useEffect } from "react";

export const useOutsideClick = (cb, ref) => {
	useEffect(() => {
		const handlerClickOutside = (e) => {
			console.dir(ref.current.contains);
			ref.current && !ref.current.contains(e.target) && cb();
		};
		document.addEventListener("mousedown", handlerClickOutside);

		return () => document.removeEventListener("mousedown", handlerClickOutside);
	}, [ref]);
};
