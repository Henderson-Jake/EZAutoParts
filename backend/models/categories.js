module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("Categories", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, {
      tableName: "categories",
    });
  
    return Categories;
  };