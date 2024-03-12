const category = require('../controllers/category.controller.js')
const router = require('express').Router()
const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
    router.get('/', category.getAll)
    router.post('/', authenticateToken, category.create)
    router.get('/user', authenticateToken, category.getAllByUser)
    router.delete('/:id', authenticateToken, category.delete)
    app.use('/api/category', router)
}