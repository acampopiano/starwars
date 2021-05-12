import React, { useState, useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			characters: [],
			planets: [],
			favorites: [],
			charactersDetails: {},
			planetsDetails: {}
		},
		actions: {
			loadData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const baseURL = "https://www.swapi.tech/api/";
				/*const fetchVehiclesData = async () => {
					try {
						const response = await fetch(baseURL + "vehicles");
						const responseJson = await response.json();
						setStore({ vehicles: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};*/
				const fetchCharactersData = async () => {
					try {
						const response = await fetch(baseURL + "people");
						const responseJson = await response.json();
						setStore({ characters: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
				const fetchPlanetsData = async () => {
					try {
						const response = await fetch(baseURL + "planets");
						const responseJson = await response.json();
						setStore({ planets: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
				//fetchVehiclesData();
				fetchCharactersData();
				fetchPlanetsData();
			},
			loadCharactersDetails: url => {
				const fetchCharactersDetailsData = async () => {
					try {
						const response = await fetch(url);
						const responseJson = await response.json();
						setStore({ charactersDetails: responseJson.result.properties });
					} catch (e) {
						console.error(e);
					}
				};
				fetchCharactersDetailsData();
				return () => console.log("loading in charactersDetails...");
			},
			loadPlanetsDetails: url => {
				const fetchPlanetsDetailsData = async () => {
					try {
						const response = await fetch(url);
						const responseJson = await response.json();
						setStore({ planetsDetails: responseJson.result.properties });
					} catch (e) {
						console.error(e);
					}
				};
				fetchPlanetsDetailsData();
				return () => console.log("loading in planetsDetails...");
			},
			addToFavorites: (index, name, type) => {
				const store = getStore();
				const filter = store.favorites.filter(item => item.name === name && item.type === type);
				if (filter.length === 0) {
					let newFavoriteItem = {
						uid: index,
						name: name,
						type: type
					};
					const newFavoriteItemList = [...store.favorites, newFavoriteItem];
					//console.log(newFavoriteItemList);
					setStore({ favorites: newFavoriteItemList });
				}
			},
			delToFavorites: (name, type) => {
				const store = getStore();
				const filter = store.favorites.filter(item => item.name !== name && item.type !== type);
				setStore({ favorites: filter });
			}
		}
	};
};

export default getState;
