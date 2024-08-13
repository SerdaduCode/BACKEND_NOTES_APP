import express from "express";
import { prisma } from "./config/database.js"
import NotesController from "./controller/notes.js";

const app = express();
const port = 3000;

prisma ? console.log("Connection Success") : console.log("Connection Failed")

app.listen(port, () => {
  console.log(`Notes app listening on port ${port}`);
});
