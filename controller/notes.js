import { addNoteSchema, idSchema, getManyNoteSchema } from '../middleware/notes.js';
import NoteService from "../service/notes.js";

class NoteController {
  constructor() {
    this.noteService = new NoteService();
  }

  addNote = async (req, res) => {
    try {
      const { error, value } = addNoteSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const result = await this.noteService.addNote(value);
      res.status(201).json(result);
    } catch (error) {
      console.log("Controller Error, ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getNote = async (req, res) => {
    try {
      const { error, value } = idSchema.validate(req.params);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const result = await this.noteService.findNote(value.id);
      if (!result) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json(result);
    } catch (error) {
      console.log("Controller Error, ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getManyNote = async (req, res) => {
    try {
      const { error, value } = getManyNoteSchema.validate(req.query);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      let result;
      if (value.filter === 'archive') {
        result = await this.noteService.findArchivedNote();
      } else {
        result = await this.noteService.findManyNote();
      }
      if (!result) {
        return res.status(404).json({ message: "No notes found" });
      }
      res.status(200).json(result);
    } catch (error) {
      console.log("Controller Error, ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateNote = async (req, res) => {
    try {
      const data = req.body
      const id = req.params.id
      const result = await this.noteService.updateNote(id, data)
      if (!result) {
        res.status(404)
      }
      res.status(200).json(result)
    } catch (error) {
      console.log("Controller Error, ", error)
    }
  };
  deleteNote = async (req, res) => {
    try {
      const id = req.params.id
      const result = await this.noteService.deleteNote(id)
      if (!result) {
        res.status(404)
      }
      res.status(200).json(result)
    } catch (error) {
      console.log("Controller Error, ", error)
    }
  }
}

export default NoteController
