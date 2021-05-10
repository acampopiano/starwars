import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import CharactersImg from "../../img/characters.png";

export const CharactersCards = () => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};
	return (
		<div className="container">
			<div className="row mt-3 mb-3">
				{store.characters
					? store.characters.map((item, i) => (
							<div key={`${i}`} className="col-lg-3 col-md-12 mx-auto mb-3">
								<div className="card card-block" style={styles}>
									<div className="card-header">
										<img src={CharactersImg} className="card-img-top img-fluid" alt="Imagen" />
									</div>
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">{""}</p>
									</div>
									<div className="card-footer">
										<a href={item.url} className="btn btn-primary">
											Learn More!
										</a>
									</div>
								</div>
							</div>
					  ))
					: "Loading..."}
			</div>
		</div>
	);
};
