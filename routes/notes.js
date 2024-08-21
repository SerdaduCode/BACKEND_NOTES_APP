import { Router } from "express";
import NoteController from "../controller/notes.js";

const router = Router();
const controller = new NoteController();
router
  .post("/", controller.addNote)
  .get("/", controller.getManyNote)
  .get("/archived", controller.getArchivedNote)
  .get("/:id", controller.getNote)
  .put("/:id", controller.updateNote)
  .delete("/:id", controller.deleteNote);

export default router;
