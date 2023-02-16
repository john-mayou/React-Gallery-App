import { useState } from "react";
import axios from "axios";

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
			<button value={id} onClick={(e) => handleAddLike(e)}>
				Love It!
			</button>
			<button value={id} onClick={(e) => handleDeletePhoto(e)}>
				Delete
			</button>
			<p>{likes} people love this!</p>
		</article>
	);
}

export default GalleryItem;
