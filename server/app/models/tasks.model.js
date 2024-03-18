module.exports = (connex, Sequelize) => {
    const Tasks = connex.define('Tasks', {
        taskname: {
            type: Sequelize.TEXT
        },
        taskdescription: {
            type: Sequelize.TEXT
        },
        taskstatus: {
            type: Sequelize.INTEGER
        },
        taskenddate: {
            type: Sequelize.TEXT
        },
        priority: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        category_id: {
            type: Sequelize.INTEGER
        },
        project_id: {
            type: Sequelize.INTEGER
        }
    })

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
        Tasks.belongsTo(models.Category, { foreignKey: 'category_id', onDelete: 'SET NULL', allowNull: true });
        Tasks.belongsTo(models.Projects, { foreignKey: 'project_id', onDelete: 'SET NULL', allowNull: true });
    }
    
    return Tasks
}
