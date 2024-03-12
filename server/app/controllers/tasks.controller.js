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
   if (req.body.category_id == '') {
        req.body.category_id = null
   }
    const newtask = {
         taskname: req.body.taskname,
         taskdescription: req.body.taskdescription,
         taskstatus: req.body.taskstatus,
         taskenddate: req.body.taskenddate,
         user_id: req.user.id,
         priority: req.body.priority,
         category_id: req.body.category_id
    }
   Task.create(newtask)
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

exports.findAllByUser = (req, res) => {
   const id = req.user.id
   console.log(id)
   console.log('user', req.user.id)
   Task.findAll({where: {user_id: id}})
   .then(data => {
       res.send(data)
   })
   .catch(err => {
        console.log(err)
       res.status(500).send({
           message:
           err.message || 'Some error occured'
       })
   })
}