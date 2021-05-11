const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			vehicles: [],
			characters: [],
			planets: [],
			favorites: [],
			charactersDetails: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const baseURL = "https://www.swapi.tech/api/";
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
				fetchVehiclesData();
				fetchCharactersData();
				fetchPlanetsData();
			},
			loadCharactersDetails: uid => {
				const baseURL = "https://www.swapi.tech/api/people/" + uid;
				const fetchCharactersDetailsData = async () => {
					try {
						const response = await fetch(baseURL);
						const responseJson = await response.json();
						setStore({ charactersDetails: responseJson.results });
					} catch (e) {
						console.error(e);
					}
				};
				fetchCharactersDetailsData();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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
			delFavorites: name => {
				const store = getStore();
				const filter = store.favorites.filter(item => item.name !== name);
				const newFavoriteItemList = [...store.favorites, filter];
				setStore({ favorites: newFavoriteItemList });
			}
		}
	};
};

export default getState;
