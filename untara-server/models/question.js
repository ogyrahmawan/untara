'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Question.init({
    p1: DataTypes.STRING,
    p2: DataTypes.STRING,
    p3: DataTypes.STRING,
    p4: DataTypes.STRING,
    p5: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};