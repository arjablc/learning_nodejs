module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "",
	DB: "test_nodejs", //! Create a db of the same name form the xampp admin page. 
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
//? wtf is this???
