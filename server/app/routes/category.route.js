const category = require('../controllers/category.controller.js')
const router = require('express').Router()
const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
    router.get('/', category.getAll)
    router.post('/', authenticateToken, category.create)
    app.use('/api/category', router)
}