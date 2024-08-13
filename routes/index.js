import { Router } from 'express'
import NoteRouter from './notes.js'

const apiRouter = (app) => {
    const router = Router()
    app.use('/', router)
    router.use('/notes', NoteRouter)
}

export default apiRouter