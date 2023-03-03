const userRouter = require("express").Router()
const User = require("../models/User")
//const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

userRouter.post("/sign-in",(req,res,next)=>{
    User.create(req.body)
    .then((user)=>{
        res.status(201).send(user)})
})

userRouter.post("/log-in",(req,res,next)=>{
    const {email,password} = req.body
    User.findOne({where:{email:email}})
    .then(user=>{
        const {favorites,id,username} = user.dataValues
        bcrypt.compare(password,user.dataValues.password)
        .then(result=>
            result
            ? res.status(200).send({favorites,username,id})
            : null)
    })
    .catch(()=>res.status(401).send({message:"Email or Password invalid"}))
})

userRouter.post("/add-favorite",(req,res,next)=>{
    const {id,element} = req.body
    User.findOne({where:{id}})
    .then(user=>{
        user.update({favorites:[...user.favorites,element]})
        .then(res.status(200).send("actualizado"))
    })
})

userRouter.get("/:id/favorite-list",(req,res,next)=>{
    const {id} = req.params
    User.findOne({where:{id}})
    .then(user=>res.status(200).send(user.favorites))
    .catch(err=>res.send("Ups...",err))    
})

userRouter.post("/remove-favorite",(req,res,next)=>{
    const {id,element} = req.body
    User.findOne({where:{id}})
    .then(user=>{
        user.update({favorites:[...user.favorites,element]})
        .then(res.status(200).send("actualizado"))
    })
})


module.exports = userRouter