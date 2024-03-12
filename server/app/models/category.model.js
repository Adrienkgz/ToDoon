module.exports = (connex, Sequelize) => {
    const Category = connex.define('Category', {
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      icon: Sequelize.STRING,
      user_id: {
        type: Sequelize.INTEGER
      }
    });
  
    Category.associate = (models) => {
      Category.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
      Category.hasMany(models.Tasks, { foreignKey: 'category_id', onDelete: 'SET NULL', allowNull: true });
    }
    return Category;
  };