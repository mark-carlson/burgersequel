
// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define('Burger', {
//     burger_name: DataTypes.STRING,
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
     
//     }
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return Burger;
// };

//var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }  
   
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};