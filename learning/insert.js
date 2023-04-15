const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.ATLAS_URI || "";
const client = new MongoClient(url);
const dbName = 'mongo_learning_db';


async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('mongo_learning');

  const insertOneResult = await collection.insertOne({
    item:'canvas',
    qty: 100,
    tags: ['cotton', 'fabric'],
    size: {h: 28, w:35.5, uom: 'cm'}
  });

  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  console.log('Inserted documents =>', insertResult);



  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());