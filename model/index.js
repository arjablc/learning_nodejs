//Imports the things that are required to create a database and the config of the database 
//rather than being hard coded, the file containing the database config is being imported here, 
const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

// This creates a new sequalize instance that has the config from the imported db config module
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

//this piece of code will try to authenticate us to the mySql server
//if succeeded it will log "Connected", else show error
sequelize
	.authenticate()
	.then(() => {
		console.log("Connected");
	})
	.catch((err) => {
		console.log("Error occured" + err);
	});
//an empty object to store reference to different models
const db = {};

//Puts the values of the imported modules into the db object 
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Importing the function defined in the userModel.js file 
//calling the function putting sequelize and DataTypes as the 
//parameters of the function... the returned thing(don't know the datatype)
//will be put in db object at user...
db.user = require("./userModel.js")(sequelize, DataTypes);

//as the name here suggests this will sync the model defination with the database
//in my case I am using xampp to simulate a mySql db
db.sequelize.sync({ force: false }).then(() => {
	console.log("yes re-sync done");
});
//*this will make the table but we have to create the db ourselves in the xampp 
//*admin page

//this then exposes the db object with the models defined inside of it 
//to other files that import this file, for further use.
module.exports = db;
