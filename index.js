const mysql = require('mysql')
const fs = require('fs')
const util = require('util')

exports.dbCreator = function(){
	console.log("test message");


	fs.appendFile('db.js', (err)=> {
		if(err) throw err;
		
		let connection = mysql.createConnection({
			host: "",
			port: 3306,
		  
			// Your username
			user: "",
		  
			// Your password
			password: "",
			database: ""
		  });

		  connection.connect(function(err) {
			if (err) throw err;
			  console.log('connection succesful')
		  });

		})
		console.log('file created succesfully')

}