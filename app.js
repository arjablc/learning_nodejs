const express = require("express");
const app = express();
const { user } = require("./model/index.js");

require("./model/index.js");


//setting up ejs and telling nodejs to use ejs
app.set("view engine", "ejs");

app.get("/variable", (req, res) => {
	res.render("variable.ejs", { variable: "Hello World" });
});

app.listen(3000, () => console.log("hello world"));
