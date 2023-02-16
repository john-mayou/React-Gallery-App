import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ getPhotos, photoList }) {
	return (
		<>
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
		</>
	);
}

export default GalleryList;
