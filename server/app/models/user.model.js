module.exports = (connex, Sequelize) => {
    const User = connex.define('users', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    })
  
    return User;
  }