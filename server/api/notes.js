import { MongoClient } from "mongodb";
import { defineEventHandler, readBody } from "h3";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db = null;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("notesdb");
    console.log("Connected to MongoDB");
  }
  return db;
}

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    try {
      const database = await connectToDatabase();
      const notes = database.collection("notes");

      const body = await readBody(event);

      const result = await notes.insertMany(body.notes);

      return { success: true, insertedCount: result.insertedCount };
    } catch (e) {
      console.error(
        "Error occurred while connecting to MongoDB or inserting notes:",
        e
      );
      return { success: false, error: e.message };
    }
  }
});
