const category = require('../controllers/category.controller.js')
const router = require('express').Router()
const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
    router.post('/', authenticateToken, category.create)
    router.get('/', authenticateToken, category.getAllByUser)
    router.delete('/', authenticateToken, category.deleteAllCategoriesFromThisUser)
    app.use('/api/category', router)
}