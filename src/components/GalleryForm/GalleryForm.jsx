import { useState } from "react";
import axios from "axios";
import "./GalleryForm.css";

function GalleryForm({ getPhotos }) {
	const [pathInput, setPathInput] = useState(""); // for new photo
	const [descriptionInput, setDescriptionInput] = useState(""); // for new photo

	// submit new photo to gallery
	const handleSubmit = (e) => {
		e.preventDefault();

		const newPhoto = {
			path: pathInput,
			description: descriptionInput,
			likes: 0, // initial state
		};

		axios
			.post("/gallery", newPhoto)
			.then(() => {
				getPhotos();

				// reset inputs
				setPathInput("");
				setDescriptionInput("");
			})
			.catch((error) => {
				console.log("Error POST /gallery", error);
			});
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<div className="input__box">
				<input
					className="form-input"
					type="type"
					placeholder="Path"
					value={pathInput}
					onChange={(e) => setPathInput(e.target.value)}
				></input>
				<input
					className="form-input"
					type="type"
					placeholder="Description"
					value={descriptionInput}
					onChange={(e) => setDescriptionInput(e.target.value)}
				></input>
			</div>
			<button type="submit" className="add-btn">
				Add Photo
			</button>
		</form>
	);
}

export default GalleryForm;
