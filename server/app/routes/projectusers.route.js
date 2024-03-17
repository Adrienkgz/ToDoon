const authenticateToken = require('../middleware/authenticateToken')
const projectusers = require('../controllers/projectusers.controller.js')
const router = require('express').Router()

module.exports = app => {
    router.get('/project/:id', authenticateToken, projectusers.getAllByProject)
    router.get('/user/:id', authenticateToken, projectusers.getAllByUser)
    router.post('/:id', authenticateToken, projectusers.createCollaborator)
    router.delete('/:id_project/:id_user', authenticateToken, projectusers.removeCollaborator)
    app.use('/api/project-users', router)
  }