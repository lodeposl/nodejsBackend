import mongoose from "mongoose";

mongoose.Promise = Promise;

mongoose.set("debug", process.env.mongoDebug);

export const db = mongoose

export const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export const connectMongo = async () => {
  await db.connect( process.env.mongoConnection, config);
};
export const disconnectMongo = async () => {
  await db.disconnect()
};