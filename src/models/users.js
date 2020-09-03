
module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('Users', {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataType.STRING
        },
        lastname: {
          type: DataType.STRING
        },
        birthday: {
          type: DataType.DATE
        },
        dni: {
          type: DataType.INTEGER
        }
      });
    return Users;
};