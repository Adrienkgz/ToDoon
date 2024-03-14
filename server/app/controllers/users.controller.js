const db = require('../models')
const User = db.Users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.signup = (req, res) => {
  try {
    // Vérifie si l'utilisateur existe
    const {firstName, lastName, email, password} = req.body
    
    User.findOne({ where: { email: email } })
    .then(existingUser => {
      if (existingUser) {
        console.log('Cet utilisateur existe déjà')
        return res.status(400).json({ message: 'Cet utilisateur existe déjà' })
      }
      else {
        // Hash le mot de passe
        const hashedPassword = bcrypt.hashSync(password, 8)
        
        // Crée un nouvel utilisateur
        User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword
        })
        .then(newUser => {
          // Crée un token
          const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 heures
          })
          res.status(201).send({
            message: 'User registered successfully',
            user: {
              id: newUser.id,
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              email: newUser.email
            },
            token: token
          })
        })
      }   
    })
  } catch (e) {
    console.log(e)
    res.status(500).send({ message: e.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Vérifie si l'utilisateur existe
    const user = await User.findOne({ where: { email: email } })
    if (!user) {
      return res.status(404).send({ message: 'Utilisateur non trouvé' })
    }
    // Vérifie le mot de passe
    const passwordIsValid = await bcrypt.compareSync(password, user.password)
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Mot de passe invalide'
      })
    }

    // Crée un token
    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // 24 heures
    })
    console.log(token)
    res.status(200).send({
      message: { message: 'Utilisateur connecté avec succès'},
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accessToken: token
      },
      token: token
    })
  } catch (e) {
    console.log(e)
    res.status(500).send({ message: e.message })
  }
}


exports.findAll = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Une erreur est survenue'
      });
    });
}