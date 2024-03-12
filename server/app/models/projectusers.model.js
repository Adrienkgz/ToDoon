module.exports = (connex, Sequelize) => {
    const ProjectUsers = connex.define('ProjectUsers', {
        project_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Projects',
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    });
  
    ProjectUsers.associate = (models) => {
        ProjectUsers.belongsTo(models.Projects, { foreignKey: 'project_id', onDelete: 'CASCADE' });
        ProjectUsers.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    }
    return ProjectUsers;
  };