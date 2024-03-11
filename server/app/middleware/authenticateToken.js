const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).send('Access denied')
  }

  const token = authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).send('Access denied')
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token')
    }
    req.user = user
    console.log('user', user)
    next()
  })
}

module.exports = authenticateToken