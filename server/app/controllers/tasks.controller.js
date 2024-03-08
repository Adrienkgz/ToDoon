const db = require('../models') 
const Task = db.Tasks

exports.findAll = (req, res) => {
   Task.findAll()
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
   if(!req.body.taskname) {
       res.status(400).send({
           message: 'The name is mandatory'
       })
       return;
   }
   Task.create(req.body)
   .then(data => {
       res.send(data)
   })
   .catch(err => {
       res.status(500).send({
           message: 'Could not insert the data'
       })
   })
}

exports.findOne = (req, res) => {
   const id = req.params.id
   Task.findByPk(id)
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
   Task.update(req.body, {
       where: {id: id}
   })
   .then(num => {
       if (num == 1){
           res.send({
               message: 'product updated'
           })
       }else{
           res.send({
               message: 'Product not found'
           })
       }
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
   Task.destroy({
       where: {id: id}
   })
   .then(num => {
       if (num == 1){
           res.send({
               message: 'Product deleted'
           })
       }else{
           res.send({
               message: 'Product not found'
           })
       }
   })
   .catch(err => {
       res.status(500).send({
           message:
           err.message || 'Some error occured'
       })
   })
}