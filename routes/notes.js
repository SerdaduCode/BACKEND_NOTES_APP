import { Router } from "express";
import NoteController from "../controller/notes.js";

const router = Router()
const controller = new NoteController
router
  .post('/', controller.addNote)
  .get('/', controller.getManyNote)
  .get('/:id', controller.getNote)

export default router