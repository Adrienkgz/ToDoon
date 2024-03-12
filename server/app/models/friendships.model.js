module.exports = (connex, Sequelize) => {
    const Friendships = connex.define('Friendships', {
      status: {
        type: Sequelize.ENUM('pending', 'accepted', 'rejected', 'none'),
        defaultValue: 'none'
      },
      user_id1: {
        type: Sequelize.INTEGER
      },
      user_id2: {
        type: Sequelize.INTEGER
      }
    });
  
    Friendships.associate = (models) => {
      Friendships.belongsTo(models.Users, { foreignKey: 'user_id1', onDelete: 'CASCADE' });
      Friendships.belongsTo(models.Users, { foreignKey: 'user_id2', onDelete: 'CASCADE' });
    }
    return Friendships;
  };