import React from "react";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
export const Home = () => {
	return (
		<div className="container">
			<Characters />
			<Planets />
		</div>
	);
};
