const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const { listenerCount } = require("process");
dotenv.config();

const MONGO_URI = process.env.ATLAS_URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


const dbTest = async (req, res) => {
    
    const client = new MongoClient(MONGO_URI, options);
    await client.connect()
    const collection = client.db("MuseboardDB").collection("Testing")
    console.log("client connected")
    await collection.findOne().then((result) => {res.status(200).json({
        data: result
    })})
    //do stuff
    client.close()
    console.log("client closed")
}



module.exports = { dbTest };
