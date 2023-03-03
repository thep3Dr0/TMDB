const db =require("../config/DB")
const bcrypt = require("bcrypt")

const saltRounds = 10
bcrypt.genSalt(saltRounds,(err,salt)=>salt||err)


const { Sequelize, Model, DataTypes } = require("sequelize");

class User extends Model {
  
}

User.init({
    salt:{
        type:DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    favorites:{
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: []
    },
  },{
    sequelize:db,
    modelName: 'User',
    hooks: {
      beforeValidate: async (user) => {
        const salt = bcrypt.genSaltSync(10);
        user.salt = salt;
        const hash = await bcrypt.hash(user.password, user.salt);
        return (user.password = hash);
        
      }
    }
  });

  

  module.exports = User