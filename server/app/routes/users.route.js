const authenticateToken = require('../middleware/authenticateToken')

module.exports = app => {
  const user = require('../controllers/users.controller.js')
  const router = require('express').Router()
    router.post('/signup', user.signup)
    router.post('/login', user.login)
    router.get('/getUser', authenticateToken, user.getUser)
    router.post('/updateUser', authenticateToken, user.updateUser)
    router.post('/changePassword', authenticateToken, user.changePassword)
    router.delete('/deleteUser', authenticateToken, user.deleteUser)
    router.get('/searchByEmail/:email', authenticateToken, user.searchByEmail)
    app.use('/api/user', router)
  }