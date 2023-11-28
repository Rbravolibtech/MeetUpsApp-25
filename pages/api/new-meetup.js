import {MongoClient} from "mongodb";

// /api/new-meetup
//POST /api/new-meetup

function handler(req, res) {
  if  (req.method === "POST" ){
    const data = req.body;


    

   const client =  MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.rfre0.mongodb.net/?")
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

  const result = meetupsCollection.insertOne(data);

  console.log(result);

  client.close();

  res.status(201.).json({message: "meetup inserted"})
  
    }
}

export default handler;