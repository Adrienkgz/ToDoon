module.exports = app => {
    const task = require('../controllers/tasks.controller.js')
    const router = require('express').Router()
    router.get('/', task.findAll)
    router.post('/', task.create)
    router.get('/:id', task.findOne)
    router.delete('/:id', task.delete)
    router.put('/:id', task.update)
    app.use('/api/task', router)
}