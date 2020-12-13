'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      p1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      p2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      p3: {
        type: Sequelize.STRING,
        allowNull: false
      },
      p4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      p5: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};