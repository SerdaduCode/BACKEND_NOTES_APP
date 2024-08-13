import express, { json } from "express";
import database from "./config/database.js"
import apiRouter from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(json())

try {
  await database.$connect();
} catch (error) {
  console.error(error);
}

app.get("/", (req, res) => {
  res.send("SerdaduNote Backend");
});

apiRouter(app)

app.listen(port, () => {
  console.log(`Notes app listening on port ${port}`);
});
