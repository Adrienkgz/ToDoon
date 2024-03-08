const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const corsOption = {
    origin: 'http://localhost:8081'
}
app.use(cors(corsOption))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
//test
app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})

const PORT =  8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

const db = require('./app/models')
db.connex.sync()

require('./app/routes/product.route')(app)

