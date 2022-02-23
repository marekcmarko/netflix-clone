import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

	//code that runs based on a specific condition/variable
	useEffect(() => {
		//if [] blank, run once when row lowads, and dont run again
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			console.log(request.data.results);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	console.table(movies);
	return (
		<div className="row">
			{/*title*/}
			<h2>{title}</h2>
			<div className="row__posters">
				{/** several row__posters */}
				{movies.map((movie) => (
					<img
						key={movie.id}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{/*container* --> posters */}
		</div>
	);
}

export default Row;
