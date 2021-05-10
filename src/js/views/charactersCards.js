import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CharactersCards = () => {

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
        <div className="container">
            {store.characters ? 
                store.characters.map((item,i) => (
                    <div key={item.id} className="card col-3">
                        <picture style={pictureStyle}>
                            <img
                                src={}
                                className="card-img-top img-fluid"
                                alt="card image"></img>
                        </picture>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{}</p>
                        </div>
                        <div className="card-footer">
                            <a href={} className="btn btn-primary">
                                {}
                            </a>
                        </div>
                    </div>
                ))
                :"Loading..."
            }
        </div>
    )
}

