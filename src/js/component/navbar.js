import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwarsImage from "../../img/starwars.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand">
							<img src={starwarsImage} />
						</span>
					</Link>
					<div className="ml-auto">
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites <span className="badge badge-light">{store.favorites.length}</span>
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								{store.favorites.map((item, index) => {
									<a key={item.uid} className="dropdown-item" href="#">
										{item.name}
									</a>;
								})}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
