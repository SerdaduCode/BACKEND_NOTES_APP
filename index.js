import express from "express";
import NotesController from "./controller/notes.js";

const app = express();
const port = 3000;

const notesController = new NotesController();
routes(app, notesController);

app.listen(port, () => {
  console.log(`Notes app listening on port ${port}`);
});
