require('dotenv').config()
// require('./dotenv')
const logger = require('./logger')
const bcrypt = require('bcrypt')
const connection = require('./sequelize-orm')

const store = connection()
const tryStore = async () => {
  try {

    /* const users = await store.User.findAll();
    console.log(users); */
    /*  //Insertar
     const user = await store.User.create({
       name: 'Richie Cedillo',
       email: 'rcedilloal@gmail.com',
       password: 'querty'
     }) */
/*     //update
    await store.User.update({ password: await bcrypt.hash('qwerty', 9) }, {
      where: {
        email: 'rcedilloal@gmail.com'
      }
    }) */
    const richie = await store.User.findAll({
      where: {
        id: '1'
      }
    })
    console.log(`Resultado: ${richie.password}`)
    //nueva consulta
    //console.log(await store.User.findAll());

  } catch (error) {
    logger.error(error)
  }
}
tryStore()

// const constValue = {
//     name: 'Ethien',
//     email: 'ethien.salinas@gmail.com',
//     timestamp: new Date().toISOString()
// }
// logger.debug(`This is a debug line: ${JSON.stringify(constValue)}`)
// logger.error(`Error log line: ${new Error('so sad 😓')}`)

