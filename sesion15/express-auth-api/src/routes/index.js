const { response } = require('express')
const express = require('express')
const router = express.Router()
const DB = require('../db')
const db = new DB('storage.sqlite')
const bcrypt = require('bcrypt')

router.post('/login', (req, res) => {
    res.end('[POST] /login')
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