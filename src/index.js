//  require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server listening on: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database not connected. ", error);
  });



/*
 import express from 'express';
 const app = express();

 ( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, ()=>{
            console.log(`App listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
 })() */
