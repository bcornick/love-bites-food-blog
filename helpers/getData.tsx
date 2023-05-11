// DO NOT CALL THESE FUNCTIONS FROM THE CLIENT SIDE OR IT WILL EXPOSE MONGODB CREDENTIALS

import { MongoClient, ObjectId } from 'mongodb';

const mongodb_username = process.env.MONGODB_USERNAME;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_clustername = process.env.MONGODB_CLUSTERNAME;
const mongodb_database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@${mongodb_clustername}.4xsak5a.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

export const getAll = async () => {
  let client;

  try {
    client = await MongoClient.connect(uri);
  } catch (e) {
    return false;
  }

  const db = client.db();

  try {
    const collection = db.collection('loveBitesFoodBlog');
    const findResult = await collection.find({}).toArray();
    return findResult;
  } catch (e) {
    return false;
  }
};
