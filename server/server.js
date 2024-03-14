const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const corsOption = {
    origin: 'http://localhost:8081'
}
app.use(cors(corsOption))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))

const PORT =  8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

const db = require('./app/models')
db.connex.sync()

require('./app/routes/tasks.route')(app)
require('./app/routes/users.route')(app)
require('./app/routes/category.route')(app)


