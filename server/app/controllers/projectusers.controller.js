const db = require('../models') 
const ProjectUsers = db.ProjectUsers

exports.createCollaborator = (req, res) => {
    const collaborator = {
        user_id: req.body.id,
        project_id: req.params.id,
        role: req.body.role
    }

    ProjectUsers.create(collaborator)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the collaborator."
            });
        });
}

exports.getAllByProject = (req, res) => {
    const id = req.params.id;
    ProjectUsers.findAll({ where: { project_id: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving collaborators."
            });
        });
}

exports.getAllByUser = (req, res) => {
    const id = req.user.id;
    console.log('id', id)
    ProjectUsers.findAll({ where: { user_id: id } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving collaborators."
            });
        });
}

exports.removeCollaborator = (req, res) => {
    const id_project = req.params.id_project;
    const id_user = req.params.id_user;
    ProjectUsers.destroy({ where: { id_project: id_project, id_user: id_user } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Collaborator was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Collaborator with id=${id_user} and id_project=${id_project}. Maybe Collaborator was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Collaborator with id=" + id_user + " and id_project=" + id_project
            });
        });
}
