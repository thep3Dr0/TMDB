const {Sequelize, Model} = require("sequelize");

const db= new Sequelize('tmdb', null, null,{
    host: 'localhost',
   dialect: 'postgres',
    logging: false})



    //db.authenticate().then(()=>console.log("CONECTADO A LA DB CON EXITO"))

module.exports = db
  /* const db= new Sequelize('ohBack', null, null,{
    host: 'localhost',
   dialect: 'postgres',
    logging: false
}) */   //esta si funca

/* const db = new Sequelize('postgres://localhost:5432/checkpoint_senior', {
    logging: false
}); */   //esta no