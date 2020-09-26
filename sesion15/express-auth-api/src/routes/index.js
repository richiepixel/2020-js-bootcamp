const { response } = require('express')
const express = require('express')
const router = express.Router()
const DB = require('../db')
const db = new DB('storage.sqlite')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
  db.findByEmail(req.body.email, (err, user) => {
    if (err)
      return res.status(500).send({
        success: false,
        msg: `there was a problem finding the user ${req.body.email}`,
        err
      })
    if (!user)
      return res.status(500).send({
        success: false,
        msg: `there was a problem finding the user ${req.body.email}`,
        err
      })
    const isValidPassword = bcrypt.compareSync(req.body.password, user.user_pass)
    if (!isValidPassword)
      return res.status(401).send({
        success: false,
        msg: 'Unauthorized',
        err
      })
    const token = jwt.sign(
      { id: user.id, user: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' })
    res.status(200).send({
      success: true,
      token
    })
  })
})

router.post('/register', (req, res) => {
  db.insert([
    req.body.name,
    req.body.email,
    bcrypt.hashSync(req.body.password, 10),
  ],
    (err) => {
      if (err) return res.status(500).send(JSON.stringify({
        succes: false,
        msg: `there was a problem registering the user ${req.body.email}`,
        err
      }))
      res.status(200).send({
        succes: true,
        user: [req.body.name, req.body.email]
      })
    })

  /* router.post('/register', (req, res) => {
    res.send(JSON.stringify({
      msg: '[POST] /register',
      values: [
        req.body.name,
        req.body.email,
        req.body.password,
        bcrypt.hashSync(req.body.password, 10)
      ]
    }))  */
})

module.exports = router 