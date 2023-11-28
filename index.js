const express = require("express")
const connect = require("./config/db")
const router = require("./routes/routes")
const app = express()
app.set("view engine", "ejs")
app.set("viwes", __dirname + "/views")
app.use(express.json())
app.use(router)



app.listen(8090 , ()=>{
    connect()
    console.log("port start is 8090")
})