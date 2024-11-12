import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import voyageurRouter from "./routes/voyageur_routes.js";
import destinationRouter from "./routes/destination_routes.js";
import reservationRouter from "./routes/reservation_routes.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/voyageur", voyageurRouter);
app.use("/api/destination", destinationRouter);
app.use("/api/reservation", reservationRouter);



// Connect to MongoDB
mongoose.connect(process.env.DB_URL).
    then((res) => {
        app.listen(process.env.PORT, () => {
            console.log("Running on port " + process.env.PORT);
        });
    }).catch((err) => {
        console.log("Error connecting to the database: ", err);
    });


