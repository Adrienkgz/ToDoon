module.exports = (connex, Sequelize) => {
    const Projects = connex.define('Projects', {
      name: {
      type: Sequelize.STRING
      },
      description: {
      type: Sequelize.TEXT
      },
      icon: {
      type: Sequelize.STRING
      },
      user_id: {
      type: Sequelize.INTEGER
      }
    }, {
      hooks: {
        beforeBulkDestroy: async (options) => {
          const projectId = options.where.id;
          const ProjectUsers = connex.models.ProjectUsers;
          const projectUsers = await ProjectUsers.findAll({ where: { project_id: projectId } });
          for (const projectUser of projectUsers) {
            await projectUser.destroy();
          }
      }
      }
    });

    Projects.associate = (models) => {
      Projects.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
      Projects.hasMany(models.Tasks, { foreignKey: 'project_id', onDelete: 'SET NULL', allowNull: true });
      Projects.hasMany(models.Messages, { foreignKey: 'project_id', onDelete: 'CASCADE' });
      Projects.hasMany(models.ProjectUsers, { foreignKey: 'project_id', onDelete: 'CASCADE' });
    }
    return Projects;
  };