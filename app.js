import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';
const port = 3000

const app = express();
dotenv.config();




// const connect = async () => {
//     try {
//       await mongoose.connect(process.env.Mongo_Url);
//       console.log("Connected to mongoDB.");
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   mongoose.connection.on("disconnected", () => {
//     console.log("mongoDB disconnected!");
//   });


// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);
  
  // app.listen(3000, () => {
  //   connect();
  //   console.log("Connected to backend.");
  // });

  mongoose
  .connect(
    process.env.Mongo_Url
  )
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });