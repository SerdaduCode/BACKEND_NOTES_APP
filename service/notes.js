import Note from "../model/notes.js"
import crypto from 'crypto'

class NoteService {
    constructor() { }

    async addNote(data) {
        try {
            const noteId = crypto.randomUUID()
            const isArchived = false
            const result = await Note.addNote({ ...data, id: noteId, archived: isArchived })
            return result
        } catch (error) {
            console.log("Service Error, ", error)
        }
    }

    // Mendapatkan catatan berdasarkan ID
    async findNote(id) {
        try {
            const note = await Note.findNote(id);
            if (!note) {
                throw new Error('Catatan tidak ditemukan.');
            }
            return note;
        } catch (error) {
            console.error('Service Error:', error);
        }
    }

    async findManyNote() {
        try {
            const notes = await Note.findManyNote();
            return notes;
        } catch (error) {
            console.error('Service Error:', error);
        }
    }

    async findArchivedNote() {
        try {
            const notes = await Note.findArchivedNote();
            return notes;
        } catch (error) {
            console.error('Service Error:', error);
        }
    }

    async updateNote(id, data) {
        try {
            const note = await Note.updateNote(id, data);
            if (!note) {
                throw new Error('Catatan tidak ditemukan.');
            }
            return note;
        } catch (error) {
            console.error('Service Error:', error);
        }
    }

    async deleteNote(id) {
        try {
            const note = await Note.deleteNote(id);
            if (!note) {
                throw new Error('Catatan tidak ditemukan.');
            }
            return note;
        } catch (error) {
            console.error('Service Error:', error);
        }
    }
}

export default NoteService