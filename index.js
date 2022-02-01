require('./config/db');
const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const myRouter = require('./router')


dotenv.config()

const port = process.env.PORT || 4000
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api", myRouter)

app.get("/", (req, res)=>{
   res.send("welcome to my server")
})


app.listen(process.env.PORT || 4000, ()=>{
  console.log(`this the port ${port}`)
})