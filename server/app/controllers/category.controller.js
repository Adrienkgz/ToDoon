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
        icon: req.body.icon,
        user_id: req.user.id
    }

    console.log(category)
    console.log(req.user)
    console.log(req.body)
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

exports.getAllByUser = (req, res) => {
    Category.findAll({where: {user_id: req.user.id}})
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

exports.delete = (req, res) => {
    const id = req.params.id

    Category.destroy({where: {id: id}})
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'Category was deleted successfully'
            })
        } else {
            res.send({
                message: `Cannot delete Category with id=${id}. Maybe Category was not found`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error deleting Category with id=' + id
        })
    })
}
