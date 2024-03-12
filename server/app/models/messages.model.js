module.exports = (connex, Sequelize) => {
    const Messages = connex.define('Messages', {
      content: {
        type: Sequelize.TEXT
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      }
    });
  
    Messages.associate = (models) => {
      Messages.belongsTo(models.Projects, { foreignKey: 'project_id', onDelete: 'CASCADE' });
      Messages.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
    return Messages;
  };