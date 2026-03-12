const experss = require('express');
const mongoose = require('mongoose');
const redis = require('redis');


//init app
const PORT = 4000;
const app = experss();

// connect redis
const redisClient = redis.createClient(
    {
        url: 'redis://redis:6379'
    }   
);
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});
redisClient.connect().then(() => {
    console.log('Connected to Redis');
}).catch((err) => {
    console.error('Error connecting to Redis', err);
});  

// Connect db
const DB_USER= 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose.connect(URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});


app.get("/",(req,res)=>{
    res.send("Hello World , hi from express");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});