
module.exports = (sequelize, DataType) => {

    const Users = sequelize.define('Users', {
        id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataType.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        lastName: {
          type: DataType.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        birthday: {
          type: DataType.DATE,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        dni: {
          type: DataType.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        }
      });
    return Users;
};