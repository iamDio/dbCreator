# dbCreator
npm package  that allows users to create a database connection

## features 
Use inquirer prompt to give value to the following variables: 
* host
* port
* password
* database

## dependencies 
* mysql 
* inquirer
* fs

## boilerplate provided
```JavaScript
// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "",
  port: ,

  // Your username
  user: "",

  // Your password
  password: "",
  database: ""
});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
    console.log('connection succesful and database created")
});
```