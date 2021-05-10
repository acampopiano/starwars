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
			characters: [],
			planets: [],
			favorites: []
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
				const fetchCharactersData = async () => {
					try {
						const response = await fetch(baseURL + "people");
						const responseJson = await response.json();
						setStore({ characters: responseJson });
					} catch (e) {
						//console.error(e);
					}
				};
				const fetchPlanetsData = async () => {
					try {
						const response = await fetch(baseURL + "planets");
						const responseJson = await response.json();
						setStore({ planets: responseJson });
					} catch (e) {
						//console.error(e);
					}
				};
				fetchCharactersData();
				fetchPlanetsData();
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
			}
		}
	};
};

export default getState;
