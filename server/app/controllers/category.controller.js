const db = require('../models') 
const Category = db.Category

exports.getAll = (req, res) => {
    Category.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error occured'
        })
    })
}

exports.create = (req, res) => {
    const category = {
        name: req.body.name,
        icon: req.body.icon_id,
        user_id: req.user.id
    }
    Category.create(category)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || 'Some error occured'
        })
    })
}