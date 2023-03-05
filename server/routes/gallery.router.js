const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET /
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM photos ORDER BY id;`;

	pool.query(queryText)
		.then((result) => {
			res.status(200);
			res.send(result.rows);
		})
		.catch((error) => {
			console.log(`Error making query ${queryText}`, error);
			res.sendStatus(500);
		});
});

// POST /
router.post("/", (req, res) => {
	const queryText = `
        INSERT INTO photos ("path", "description", "likes")
        VALUES ($1, $2, $3)
    `;

	const queryValues = [req.body.path, req.body.description, req.body.likes];

	pool.query(queryText, queryValues)
		.then(() => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log(`Error making query ${queryText}`, error);
			res.sendStatus(500);
		});
});

// PUT /like/:id
router.put("/like/:id", (req, res) => {
	const queryText = `UPDATE photos SET likes=$1 WHERE id=$2;`;

	pool.query(queryText, [req.body.newLikeCount, req.params.id])
		.then(() => {
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log(`Error making query ${queryText}`, error);
			res.sendStatus(500);
		});
});

// DELETE /:id
router.delete("/:id", (req, res) => {
	const queryText = `DELETE FROM photos WHERE id=$1;`;

	pool.query(queryText, [req.params.id])
		.then(() => {
			res.sendStatus(204);
		})
		.catch((error) => {
			console.log(`Error making query ${queryText}`, error);
			res.sendStatus(500);
		});
});

module.exports = router;
