import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import VehiclesImg from "../../img/vehicles.jpg";
export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const styles = {
		maxwidth: "18rem"
	};
	return (
		<>
			<div className="container-fluid py-2">
				<h2 className="text-danger">
					<strong>Vehicles</strong>
				</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.vehicles
						? store.vehicles.map((item, index) => (
								<div key={`${index}`} className="col-lg-3 col-md-12 mx-auto mb-3">
									<div className="card card-block" style={styles}>
										<div className="card-header">
											<img src={VehiclesImg} className="card-img-top img-fluid" alt="Imagen" />
										</div>
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">{"Lorem Ipsum dolor"}</p>
										</div>
										<div className="card-footer">
											<Link to={"/vdetails/" + index} className="btn btn-primary">
												<span>Learn More!</span>
											</Link>
											<button
												type="button"
												className="btn btn-warning float-right"
												onClick={() => actions.addToFavorites(item.uid, item.name, "V")}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="red"
													className="bi bi-heart"
													viewBox="0 0 16 16">
													<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
												</svg>
											</button>
										</div>
									</div>
								</div>
						  ))
						: "Loading..."}
				</div>
			</div>
		</>
	);
};
