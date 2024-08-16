import database from "../config/database.js"

class Note {
    constructor() { }

    static async addNote(data) {
        try {
            const newNote = await database.note.create({ data })
            return newNote
        } catch (error) {
            console.log("Model Error, ", error)
        }
    }

    static async findNote(id) {
        try {
            const note = await database.note.findUnique({ where: { id } })
            return note
        } catch (error) {
            console.log("Model Error, ", error)
        }
    }

    static async findManyNote() {
        try {
            const notes = await database.note.findMany()
            return notes
        } catch (error) {
            console.log("Model Error, ", error)
        }
    }

    static async updateNote(id, data) {
        try {
            const note = await database.note.update({ where: { id }, data })
            return note
        } catch (error) {
            console.log("Model Error, ", error)
        }
    }

    static async deleteNote(id) {
        try {
            const note = await database.note.delete({ where: { id } })
            return note
        } catch (error) {
            console.log("Model Error, ", error)
        }
    }

}

export default Note