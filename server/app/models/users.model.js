module.exports = (connex, Sequelize) => {
    const Users = connex.define('Users', {
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
      },
      avatar: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      }
    })

    Users.associate = (models) => {
      Users.hasMany(models.Friendships, { foreignKey: 'user_id1', as: 'Friendships1'})
      Users.hasMany(models.Friendships, { foreignKey: 'user_id2', as: 'Friendships2' });
      Users.hasMany(models.Category, { foreignKey: 'user_id', as: 'Categories' });
      Users.hasMany(models.Projects, { foreignKey: 'user_id', as: 'Projects' });
      Users.hasMany(models.Tasks, { foreignKey: 'user_id', as: 'Tasks' });
      Users.hasMany(models.Messages, { foreignKey: 'user_id', as: 'Messages' });
      Users.hasMany(models.ProjectUsers, { foreignKey: 'user_id', as: 'ProjectUsers' });
    }
    
    return Users;
  }