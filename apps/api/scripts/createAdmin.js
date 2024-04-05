
const bcrypt = require('bcrypt');
const readline = require('readline');
const {config} = require('../src/config')
const {Sequelize} = require("sequelize")
const {UserSchema} = require("../src/db/models/user.model")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sequelize = new Sequelize(config.dbUrl,{
  dialect:"postgres",
  logging:console.log
})
const User = sequelize.define("user",UserSchema)

async function createUser(email, password, role) {
  

  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      email,
      password:hashedPassword,
      role
    })
    console.log('New user created:');
  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close()
  }
}
function promptUser() {
    rl.question('Enter email: ', (email) => {
      rl.question('Enter password: ', (password) => {
        rl.question('Enter role: ', (role) => {
          createUser(email, password, role);
          rl.close();
        });
      });
    });
  }

promptUser();