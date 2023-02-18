import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList({ getPhotos, photoList }) {
	return (
		<section className="gallery__section">
			{photoList.map((photo) => {
				return (
					<GalleryItem
						key={photo.id}
						photo={photo}
						getPhotos={getPhotos}
						photoList={photoList}
					/>
				);
			})}
		</section>
	);
}

export default GalleryList;
