import React from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/starwars.jpg";
export const Navbar = () => {
	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand">
							<img src={starwarsImage} />
						</span>
					</Link>
					<div className="ml-auto">
						<Link to="/favorites">
							<button className="btn btn-primary">
								Favorites <span className="badge badge-light">{0}</span>
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};
