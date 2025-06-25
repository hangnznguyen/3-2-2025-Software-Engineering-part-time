module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
      // No extra fields required, just associations
    });
    return Like;
  };