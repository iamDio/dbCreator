//const sql = require('mysql')
const fs = require('fs')

exports.dbCreator = function(){
	console.log("test message");
	fs.appendFile('index.js', 'test one two', (err)=> {
		if(err) throw err;
		console.log('file created succesfully')
	})
}