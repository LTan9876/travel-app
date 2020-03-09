'use strict'

const db = require('../server/db')
const {User, Food} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const foods = await Promise.all([
    Food.create({
      name: 'fried',
      description: `Bistek (Spanish: bistec) or bistec is a Spanish loan word derived from the English words "beef steak" abbreviated. NOTE: we're talking about bistek because Lily could not find any grilled onion descriptions.`
    }),
    Food.create({
      name: 'tacos',
      description:
        'A taco (US: /ˈtɑːkoʊ/, UK: /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and cheese, allowing great versatility and variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican street food, which have spread around the world.'
    }),
    Food.create({
      name: 'salsa',
      description: `Salsa is the Spanish word for "sauce".In English, especially in the United States, when the word "salsa" is used in an unqualified manner, it refers to the spicy tomato-and-chili-based preparation known as salsa roja, salsa picante or salsa cruda, as adopted from Mexican cuisine. It is commonly used as a dip alongside tortilla chips, or as a condiment served along with dishes such as huevos rancheros or burritos.
      In the Hispanophone world, there are hundreds of different kinds of salsas used in a variety of culinary applications.`
    }),
    Food.create({
      name: 'guacamole',
      description:
        'Guacamole (Spanish: [(ɡ)wakaˈmole], see below for more; informally shortened to guac in the United States[1] since the 1980s)[2] is an avocado-based dip, spread, or salad first developed in what is now Mexico.[3] In addition to its use in modern Mexican cuisine, it has become part of international and American cuisine as a dip, condiment and salad ingredient.[4][5]'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${foods.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
