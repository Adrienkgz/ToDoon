const express = require('express')

const app = express()

//test
app.get('/', (req, res) => {
    res.jsonp({message: 'Welcome'})
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})