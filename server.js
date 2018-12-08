const mongo = require('mongodb').MongoClient;
const io = require('socket.io').listen(4000).sockets;


//-------------------------connect to Mongo

// Connection URL
const url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
mongo.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    client.close();
  });
