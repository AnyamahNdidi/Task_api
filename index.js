const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 4000
app.use(cors())

app.get("/", (req, res)=>{
   res.send("welcome to my server")
})

app.listen(port, ()=>{
  console.log(`this the port ${port}`)
})