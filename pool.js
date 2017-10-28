// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    connectionLimit : 10,
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'bamazon_DB',
    debug    :  false
});   


module.exports = pool;

exports.executeQuery=function(query,callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }   
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                callback(null, {rows: rows});
                console.log("connected as id " + connection.threadId + "\n");
            }           
        });
        connection.on('error', function(err) {      
              throw err;
              return;     
        });
    });
}