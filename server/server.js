const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const gallery = require("./routes/gallery.router.js");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // needed for axios requests
app.use(express.static("build"));

app.use("/gallery", gallery);

app.listen(PORT, () => {
	console.log("Listening on port: ", PORT);
});
