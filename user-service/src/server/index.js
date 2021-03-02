import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "../config/index";
import setUproutes from "./routes";

const app = express();
const PORT = process.env.PORT || 9200;

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
setUproutes(app);
app.use((err, req, res, next) => {
  return res.status((500).json({ message: err.message }));
});

app.listen(PORT, () => {
  console.log(`App running port ${PORT}`);
});
