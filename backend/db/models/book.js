'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // define association here
      Book.hasMany(
        models.Review, { foreignKey: 'bookId', onDelete: 'cascade', hooks: true }
      )





    }
  }
  Book.init({
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    ISBN: DataTypes.INTEGER,
    summary: DataTypes.STRING,
    bookImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};