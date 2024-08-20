import NoteService from "../service/notes.js";

class NoteController {
  constructor() {
    this.noteService = new NoteService();
  }

  addNote = async (req, res) => {
    try {
      const data = req.body
      const result = await this.noteService.addNote(data)
      res.status(201).json(result)
    } catch (error) {
      console.log("Controller Error, ", error)
    }
  };

  getNote = async (req, res) => {
    try {
      const data = req.params.id
      const result = await this.noteService.findNote(data)
      if (!result) {
        res.status(404)
      }
      res.status(200).json(result)
    } catch (error) {
      console.log("Controller Error, ", error)
    }
  };

  getManyNote = async (req, res) => {
    try {
      const { filter } = req.query;
      let result;
      if (filter === 'archive') {
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
