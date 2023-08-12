const express = require("express");
const app = express();
const { user } = require("./model/index.js");

require("./model/index.js");

//Using this to parse the req and res to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up ejs and telling nodejs to use ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home.ejs");
});

app.get("/login", (req, res) => {
	res.render("login_page.ejs");
});
app.post("/login", async (req, res) => {
	const { userName, password } = req.body;
	//this will create a new entity in the
	//user table with the name and the password columns
	//filled with the data provided into the request
	//coming from the login_page.ejs file(frontend)
	await user.create({
		name: userName,
		password: password,
	});

	//? Async await seems eerily similar to dart
	res.redirect("/");
});

app.get("/variable", (req, res) => {
	res.render("variable.ejs", { variable: "Hello World" });
});

app.listen(3000, () => console.log("hello world"));
