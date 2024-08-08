console.log("**********mongodbConnect JS**********");
const { MongoClient } = require('mongodb');
const mongoURI = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME
const client = new MongoClient(mongoURI);
client.connect(mongoURI)
const session = client.startSession()
// session.startTransaction
const database = client.db(dbName)
module.exports = { mdbClient: client, database, session }