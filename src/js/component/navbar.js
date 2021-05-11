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
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites <span className="badge badge-light">{store.favorites.length}</span>
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								{store.favorites.map((item, index) => {
									return (
										<li key={`${index}`}>
											<span
												className="dropdown-item"
												onClick={() => actions.delToFavorites(item.name)}>
												{item.name}
												<i className="fa fa-trash float-right" aria-hidden="true" />
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
