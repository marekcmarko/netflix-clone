import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
	return (
		<div className="app">
			{/*nav*/}
			<Nav />
			{/*Banner*/}
			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
		</div>
	);
}

export default App;
