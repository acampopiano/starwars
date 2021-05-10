import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Cards = () => {

    const { store, actions } = useContext(Context);
    
    const pictureStyle = {
		position: "relative"
	};

	const imgStyle = {
		position: "absolute",
		width: "100%",
		height: "100%",
		objectFit: "cover"
	};

    return (
        <div className="card col-3" style={style}>
			<picture style={pictureStyle}>
				<img
					src={props.imageUrl}
					className="card-img-top img-fluid"
					alt="card image"
					style={imgStyle}></img>
			</picture>
			<div className="card-body">
				<h5 className="card-title">{}</h5>
				<p className="card-text">{}</p>
			</div>
			<div className="card-footer">
				<a href={} className="btn btn-primary">
					{}
				</a>
			</div>
		</div>
    )
}

