var mysql = require("mysql");

var con = mysql.createConnection({
    host:'localhost',
    user:'kaio',
    password:'wagner1994@'
});

con.connect(function(err){
    if(err)throw err;
    console.log('connecnted!')
});  