const router = require('express').Router()
const {Food} = require('../db/models')
module.exports = router

router.get('/:foodname', async (req, res, next) => {
  try {
    let foodName = req.params.foodname
    let findByName = await Food.findOne({
      where: {
        name: foodName
      }
    })
    res.json(findByName)
  } catch (err) {
    console.error(err)
  }
})
