const { MongoClient } = require('mongodb');
var dotenv = require('dotenv').config()

//var dotenv = require('dotenv');
//dotenv.config();

// Connection URL

const dbName = 'mongo_learning';

var config = {
    development: {
        url: url,
        client: client,
        dbName: dbName
    }
    };

    module.exports = config;