'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {
      // define association here
      Review.belongsTo(
        models.Book, { foreignKey: 'bookId' }
      )

      Review.belongsTo(
        models.User, { foreignKey: 'ownerId' }
      )
    }
  }
  Review.init({
    ownerId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    review: DataTypes.STRING,
    stars: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};