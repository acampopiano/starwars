import React, { useState, useEffect } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			characters: [],
			planets: [],
			favorites: [],
			charactersDetails: {}
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
				/*const fetchPlanetsData = async () => {
					try {
						const response = await fetch(baseURL + "planets");
						const responseJson = await response.json();
						setStore({ planets: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};*/
				//fetchVehiclesData();
				fetchCharactersData();
				//fetchPlanetsData();
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
			addToFavorites: (index, name) => {
				const store = getStore();
				const filter = store.favorites.filter(item => item.uid === index);
				if (filter.length === 0) {
					let newFavoriteItem = {
						uid: index,
						name: name
					};
					const newFavoriteItemList = [...store.favorites, newFavoriteItem];
					//console.log(newFavoriteItemList);
					setStore({ favorites: newFavoriteItemList });
				}
			},
			delToFavorites: name => {
				const store = getStore();
				const filter = store.favorites.filter(item => item.name !== name);
				setStore({ favorites: filter });
			}
		}
	};
};

export default getState;
