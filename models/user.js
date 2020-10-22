'use strict';
const {
  Model
} = require('sequelize');
const { options } = require('../routes');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Product, {through: "Cart"})
    }
  };
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    validate: {
      checkdata() {
        if (this.userName === '' || this.password === '' || this.email === '') {
          throw new Error(`Semua field harus diisi`)
        }
      }
    },
    modelName: 'User',
  });

  User.addHook("beforeCreate", (instance, option) => {
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  })

  return User;
};