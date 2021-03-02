import mongoose from "mongoose";

const MONGODB_URL = "mongodb://localhost:27017/hacker_nail";

class Database {
  constructor() {
    this.dbConnect();
  }

  dbConnect() {
    mongoose
      .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(() => {
        console.error("Database connection error");
      });
  }
}

export default new Database();
