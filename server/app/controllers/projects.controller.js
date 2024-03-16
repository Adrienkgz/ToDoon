const db = require('../models') 
const Projects = db.Projects

exports.create = (req, res) => {
    const project = {
        name: req.body.name,
        user_id: req.user.id,
        icon: req.body.icon
    }

    Projects.create(project)
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

exports.update = (req, res) => {
    const id = req.params.id

    Projects.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'Project was updated successfully'
            })
        } else {
            res.send({
                message: `Cannot update Project with id=${id}. Maybe Project was not found`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating Project with id=${id}`
        })
    })
}

exports.getAllByUser = (req, res) => {
    Projects.findAll({where: {user_id: req.user.id}})
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

    Projects.destroy({where: {id: id}})
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'Project was deleted successfully'
            })
        } else {
            res.send({
                message: `Cannot delete Project with id=${id}. Maybe Project was not found`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error deleting Project with id=${id}`
        })
    })
}

exports.deleteAllProjectsFromThisUser = (req, res) => {
    Projects.destroy({where: {user_id: req.user.id}})
    .then(num => {
        res.send({message: `${num} Projects were deleted successfully`})
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error deleting Projects'
        })
    })
}