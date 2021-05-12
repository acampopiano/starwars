const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			characters: [],
			planets: [],
			favorites: [],
			charactersDetails: {},
			planetsDetails: {},
			vehiclesDetails: {},
			allCharactersData: []
		},
		actions: {
			loadData: () => {
				const baseURL = "https://www.swapi.tech/api/";
				const baseURLAllCharactersData = "https://akabab.github.io/starwars-api/api/all.json";
				const fetchVehiclesData = async () => {
					try {
						const response = await fetch(baseURL + "vehicles");
						const responseJson = await response.json();
						setStore({ vehicles: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
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
				const fetchAllCharactersData = async () => {
					try {
						const response = await fetch(baseURLAllCharactersData);
						const responseJson = await response.json();
						setStore({ allCharactersData: responseJson });
					} catch (e) {
						console.error(e);
					}
				};
				fetchCharactersData();
				fetchPlanetsData();
				fetchVehiclesData();
				fetchAllCharactersData();
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
			loadVehiclesDetails: url => {
				const fetchVehiclesDetailsData = async () => {
					try {
						const response = await fetch(url);
						const responseJson = await response.json();
						setStore({ vehiclesDetails: responseJson.result.properties });
					} catch (e) {
						console.error(e);
					}
				};
				fetchVehiclesDetailsData();
				return () => console.log("loading in vehiclesDetails...");
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
			delToFavorites: name => {
				const store = getStore();
				const filter = store.favorites.filter(item => item.name !== name);
				setStore({ favorites: filter });
			},
			findIndexInCharacters: name => {
				const store = getStore();
				var result = -1;
				store.characters.some(function(item, i) {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				return result;
			},
			findIndexInPlanets: name => {
				const store = getStore();
				var result = -1;
				store.planets.some(function(item, i) {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				return result;
			},
			findIndexInVehicles: name => {
				const store = getStore();
				var result = -1;
				store.vehicles.some(function(item, i) {
					if (item.name === name) {
						result = i;
						return true;
					}
				});
				return result;
			}
		}
	};
};

export default getState;
