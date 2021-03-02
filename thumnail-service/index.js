import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./src/config/index";

const app = express();
const PORT = process.env.PORT || 9090;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send("Hello from yo");
});
app.listen(PORT, () => {
  console.log(`App running port ${PORT}`);
});
