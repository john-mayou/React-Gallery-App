import { useState } from "react";
import axios from "axios";
import "./GalleryItem.css";

function GalleryItem({ photo, getPhotos, photoList }) {
	const { id, path, description, likes } = photo;
	const [descriptionToggle, setDescriptionToggle] = useState(true);

	const togglePhoto = () => {
		setDescriptionToggle(!descriptionToggle);
	};

	const renderPhoto = () => {
		return descriptionToggle ? (
			<img src={path} className="card-img" onClick={togglePhoto} />
		) : (
			<p className="card-description" onClick={togglePhoto}>
				{description}
			</p>
		);
	};

	const handleAddLike = (e) => {
		const id = Number(e.target.value);

		const currentLikes = photoList.find((photo) => photo.id === id).likes;

		axios
			.put(`/gallery/like/${id}`, { newLikeCount: currentLikes + 1 })
			.then(() => {
				getPhotos();
			})
			.catch((error) => {
				console.log("Error PUT /like/:id", error);
			});
	};

	const handleDeletePhoto = (e) => {
		const id = Number(e.target.value);

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
				<button
					className="like-btn"
					value={id}
					onClick={(e) => handleAddLike(e)}
				>
					<i className="fa-regular fa-heart"></i>
					<span>Like</span>
					{likes}
				</button>
				<button
					className="delete-btn"
					value={id}
					onClick={(e) => handleDeletePhoto(e)}
				>
					<i className="fa-regular fa-trash-can"></i>Delete
				</button>
			</div>
		</article>
	);
}

export default GalleryItem;
