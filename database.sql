CREATE TABLE photos (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(100) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"likes" INTEGER
);

INSERT INTO photos ("path", "description", "likes")
VALUES
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);