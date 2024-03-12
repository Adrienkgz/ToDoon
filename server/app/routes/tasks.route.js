const task = require('../controllers/tasks.controller.js')
const router = require('express').Router()
const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
    router.get('/', task.findAll)
    router.post('/', authenticateToken, task.create)
    router.get('/:userId', authenticateToken, task.findAllByUser)
    router.get('/:id', task.findOne)
    router.delete('/:id', task.delete)
    router.put('/:id', task.update)
    app.use('/api/tasks', router)
}