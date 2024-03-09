module.exports = app => {
    const user = require('../controllers/user.controller.js')
    const router = require('express').Router()
    router.post('/signup', user.signup)
    router.post('/login', user.login)
    router.get('/', user.findAll)
    app.use('/api/user', router)
  }