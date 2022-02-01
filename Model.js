const mongoose = require('mongoose')

const jekaloSchema = mongoose.Schema({

  name_prefix:{
    type:String
  },
  first_name:{
    type:String,
    required: true,
  },
  last_name:{
    type:String
  },
  username:{
    type:String,
    required: true,
    unique:true

  },
  date_of_birth:{
    type:String,
    require:true,
    format:"DD-MM-YYYY"
  }


})

module.exports = mongoose.model("user", jekaloSchema);
