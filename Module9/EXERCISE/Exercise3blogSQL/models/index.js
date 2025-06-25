const Sequelize = require('sequelize');
const sequelize = require('../dbconnect'); // Adjust the path as necessary

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.Post = require('./post')(sequelize, Sequelize.DataTypes);
db.Comment = require('./comment')(sequelize, Sequelize.DataTypes);
db.Like = require('./like')(sequelize, Sequelize.DataTypes);

// Define relationships
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.User.hasMany(db.Like);
db.Post.hasMany(db.Like);
db.Like.belongsTo(db.User);
db.Like.belongsTo(db.Post);

module.exports = db;