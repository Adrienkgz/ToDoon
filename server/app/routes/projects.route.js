const projects = require('../controllers/projects.controller.js')
const router = require('express').Router()
const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
    router.post('/', authenticateToken, projects.create)
    router.put('/:id', authenticateToken, projects.update)
    router.get('/', authenticateToken, projects.getAllByUser)
    router.delete('/:id', authenticateToken, projects.delete)
    router.delete('/', authenticateToken, projects.deleteAllProjectsFromThisUser)
    router.get('/:id', authenticateToken, projects.findOne)
    app.use('/api/projects', router)
}