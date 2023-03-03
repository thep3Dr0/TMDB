const db = require("./config/DB")
const cors = require('cors');
const express = require("express");
const userRouter = require("./routes/user");
const server = express()
const port = 3001

server.use(express.json())
server.use(cors())

server.get("/",(req,res,next)=>{
    res.status(200).send()
})
server.use("/user", userRouter)


db.sync({ force: false }).then(() => {
    server.listen(port, () => {
    //console.log(`server conectado en el puerto ${port}`);
    });
});