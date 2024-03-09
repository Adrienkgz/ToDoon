module.exports = (connex, Sequelize) => {
    const Tasks = connex.define('tasks', {
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
        iduser: {
            type: Sequelize.INTEGER
        }
    })
    return Tasks
}
