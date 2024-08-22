import express, { json } from "express";
import database from "./config/database.js";
import apiRouter from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN_PORT);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type, Authorization, Cache-control"
  );
  next();
});

try {
  await database.$connect();
} catch (error) {
  console.error(error);
}

app.get("/", (req, res) => {
  res.send("SerdaduNote Backend");
});

apiRouter(app);

app.listen(port, () => {
  console.log(`Notes app listening on port ${port}`);
});
