import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from "cors";

import graphqlRoutes from "./config/graphql.js";
import { connectMongo } from "./config/mongo.js";

//Database Connection
connectMongo();


//backend setup
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

graphqlRoutes(app)

app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})