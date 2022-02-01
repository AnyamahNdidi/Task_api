const mongoose = require("mongoose")

const url = "mongodb+srv://admin:ilovemusic1234@cluster0.sawvg.mongodb.net/jekalo?retryWrites=true&w=majority"

// const url ="mongodb://localhost/jekalo"

mongoose.connect(url)
mongoose.connection
.on("open", (streme)=>{
    console.log("data base is connected sucessfully")
})
.once("error", (streme)=>{
  console.log("cants connect to database")
})

module.exports = mongoose