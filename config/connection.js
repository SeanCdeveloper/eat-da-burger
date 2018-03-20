// Global
const mysql = require("mysql");
// Connect
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});
connection.connect(function(err){
    if(err){
        //console.error("error connecting: " + err.stack);
        return;
    }
    //console.log("connected as id " + connection.threadId);
});
// Export Connection
module.exports = connection;