import { useState } from "react";
import axios from "axios";

function GalleryForm({ getPhotos }) {
	const [pathInput, setPathInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newPhoto = {
			path: pathInput,
			description: descriptionInput,
			likes: 0,
		};

		axios
			.post("/gallery", newPhoto)
			.then(() => {
				getPhotos();
				setPathInput("");
				setDescriptionInput("");
			})
			.catch((error) => {
				console.log("Error POST /gallery", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="type"
				placeholder="Path"
				value={pathInput}
				onChange={(e) => setPathInput(e.target.value)}
			></input>
			<input
				type="type"
				placeholder="Description"
				value={descriptionInput}
				onChange={(e) => setDescriptionInput(e.target.value)}
			></input>
			<button type="submit">Add Photo</button>
		</form>
	);
}

export default GalleryForm;
