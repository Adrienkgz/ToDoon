const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
  const user = require('../controllers/users.controller.js')
  const router = require('express').Router()
    router.post('/signup', user.signup)
    router.post('/login', user.login)
    router.get('/getUser', authenticateToken, user.getUser)
    router.post('/updateUser', authenticateToken, user.updateUser)
    app.use('/api/user', router)
  }