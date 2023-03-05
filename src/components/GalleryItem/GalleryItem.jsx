import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ photo, getPhotos, photoList }) {
	const { id, path, description, likes } = photo; // deconstructing
	const [descriptionToggle, setDescriptionToggle] = useState(true); // toggle showing description and image

	const togglePhoto = () => {
		setDescriptionToggle(!descriptionToggle); // toggle boolean
	};

	// conditional rendering based on descriptionToggle boolean value
	const renderPhoto = () => {
		return descriptionToggle ? (
			<img src={path} className="card-img" onClick={togglePhoto} />
		) : (
			<p className="card-description" onClick={togglePhoto}>
				{description}
			</p>
		);
	};

	// sends put request to increment likes of photo
	const handleAddLike = (id) => {
		const currentLikes = photoList.find((photo) => photo.id === id).likes;

		axios
			.put(`/gallery/like/${id}`, { newLikeCount: currentLikes + 1 }) // increment
			.then(() => {
				getPhotos();
			})
			.catch((error) => {
				console.log("Error PUT /like/:id", error);
			});
	};

	// sends delete request by id query param
	const handleDeletePhoto = (id) => {
		axios
			.delete(`/gallery/${id}`)
			.then(() => {
				getPhotos();
			})
			.catch((error) => {
				console.log("Error DELETE /:id", error);
			});
	};

	return (
		<article className="card">
			{renderPhoto()}
			<div className="card-btns__box">
				<button className="like-btn" onClick={() => handleAddLike(id)}>
					<i className="fa-regular fa-heart"></i>
					<span>Like</span>
					{likes}
				</button>
				<button
					className="delete-btn"
					onClick={() => handleDeletePhoto(id)}
				>
					<i className="fa-regular fa-trash-can"></i>Delete
				</button>
			</div>
		</article>
	);
}

export default GalleryItem;
