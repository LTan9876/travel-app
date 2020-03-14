const router = require('express').Router()
module.exports = router
require('dotenv').config()

router.use('/users', require('./users'))
router.use('/food', require('./food'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
