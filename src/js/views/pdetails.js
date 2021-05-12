import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlanetsImg from "../../img/planets.jpg";
export const Pdetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const styles = {
		maxwidth: "540px"
	};

	useEffect(() => {
		actions.loadPlanetsDetails(store.planets[params.uid].url);
	}, []);

	return (
		<div className="container">
			<h2 className="text-danger">
				<strong>Planet Details</strong>
			</h2>
			<div className="card mb-3" style={styles}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={PlanetsImg} alt="Planet" className="img-fluid" />
					</div>
					<div className="col-md-8 card">
						<div className="card-body">
							<h4 className="card-title">{store.planets[params.uid].name}</h4>
							{Object.entries(store.planetsDetails).map(([key, value], i) => {
								return (
									<p key={`${i}`} className="card-text">
										<strong className="text-dark">{key.toUpperCase()}:</strong> {value}
									</p>
								);
							})}
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Pdetails.propTypes = {
	match: PropTypes.object
};
