module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("user", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
	return User;
};

//the module.export on the top will export this function 
// where this module/file is being require(import keyword, I guess)
//Since this is a function parameters must be passed when calling this module
//in some other file

//and the function itself will define a table for user using sequelize orm
//! this was done before I learn JS

