'use strict';
const data = require('../products.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    data.forEach(data => {
      data.updatedAt = new Date()
      data.createdAt = new Date()
    })
    return queryInterface.bulkInsert('Products', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
};
