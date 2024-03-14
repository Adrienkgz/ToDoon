const db = require('../models')
const User = db.Users
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.signup = (req, res) => {
  try {
    // Vérifie si l'utilisateur existe
    const {firstName, lastName, email, password, avatar, birthday} = req.body
    
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
          password: hashedPassword,
          avatar,
          birthday
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
              email: newUser.email,
              avatar: newUser.avatar,
              birthday: newUser.birthday
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

exports.getUser = (req, res) => {
  try {
    const id = req.user.id
      User.findByPk(id, { attributes: { exclude: ['password'] } })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: 'Utilisateur non trouvé' })
        }
        res.status(200).send({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.avatar,
          birthday: user.birthday
        })
      })
  } catch (e) {
    console.log(e)
    res.status(500).send({ message: e.message })
  }
}

exports.updateUser = (req, res) => {
  try {
    const id = req.user.id
    const { firstName, lastName, email, avatar, birthday } = req.body
    User.update(
      { firstName, lastName, email, avatar, birthday },
      { where: { id: id } }
    )
    .then(num => {
      if (num == 1) {
        res.status(200).send({ message: 'Utilisateur mis à jour avec succès' })
      } else {
        res.status(404).send({ message: 'Utilisateur non trouvé' })
      }
    })
  }
  catch (e) {
    console.log(e)
    res.status(500).send({ message: e.message })
  }
}

exports.changePassword = (req, res) => {
  try {
    const id = req.user.id
    const { oldPassword, newPassword } = req.body
    User.findByPk(id)
    .then(user => {
      const passwordIsValid = bcrypt.compareSync(oldPassword, user.password)
      if (!passwordIsValid) {
        return res.status(401).send({ message: 'Mot de passe invalide' })
      }
      const hashedPassword = bcrypt.hashSync(newPassword, 8)
      User.update(
        { password: hashedPassword },
        { where: { id: id } }
      )
      .then(num => {
        if (num == 1) {
          res.status(200).send({ message: 'Mot de passe mis à jour avec succès' })
        } else {
          res.status(404).send({ message: 'Utilisateur non trouvé' })
        }
      })
    })
  }
  catch (e) {
    console.log(e)
    res.status(500).send({ message: e.message })
  }
}