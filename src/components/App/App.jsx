import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "../Header/Header";
import GalleryForm from "../GalleryForm/GalleryForm";
import GalleryList from "../GalleryList/GalleryList";

function App() {
	const [photoList, setPhotoList] = useState([]);

	// on page load
	useEffect(() => {
		getPhotos();
	}, []);

	const getPhotos = () => {
		axios
			.get("/gallery")
			.then((response) => {
				setPhotoList(response.data); // set local state
			})
			.catch((error) => {
				console.log("Error GET /gallery", error);
			});
	};

	return (
		<div className="app">
			<Header />
			<GalleryForm getPhotos={getPhotos} />
			<GalleryList getPhotos={getPhotos} photoList={photoList} />
		</div>
	);
}

export default App;
