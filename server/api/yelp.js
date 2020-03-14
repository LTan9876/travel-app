// const router = require('express').Router()
// module.exports = router

// if (!process.env.YELP_CLIENT_KEY || !process.env.YELP_API_KEY) {
//   console.log('Yelp client ID / secret not found. Skipping Yelp Updates.')
// } else {
//   const yelp = {
//     app_id: process.env.YELP_CLIENT_KEY,
//     app_secret: process.env.YELP_API_KEY
//   }

//   router.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=${foodname}&latitude=19.4326&longitude=-99.1332`, (req, res, next) => {
//     headers: {
//       Authorization: `Bearer ${app_secret}`
//     }
//   })
//   try{
//     res
//   }
//   catch (err) {
//     next (err)
//   }

// }
