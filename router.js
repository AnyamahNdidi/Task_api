const express = require('express')
// const res = require('express/lib/response')
const userModel = require("./Model");

const router = express.Router();

// route.post("/user", async (req, res)=>{

//   const { first, last, username, data, prefix} = req.body;

//   try{
//     const myUserdata = await jekaloUser.create({
//       first,
//       last,
//       username,
//       data
//    })

//    res.status(201).json({data: myUserdata})
//   }
//   catch(error){
//     res.status(400).json({messsage:"cannotghjhb submit" })
//   }
// })


router.post("/user", async (req, res) => {
  // const { first, last, username, data, prefix} = req.body;
 
  try {
    const createUser = await userModel.create({
      name_prefix:req.body.first_name.charAt(0).toUpperCase() + req.body.last_name.charAt(0).toUpperCase(),
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      username:req.body.username,
      date_of_birth:req.body.date_of_birth
    });
    res.status(200).json(createUser);
  } catch (err) {
    res.status(400).json({ message: "user name must be unigue" });
  }
});


router.get("/users", async (req, res)=>{
 try{

  const getAll = await userModel.find()
  res.status(200).json(getAll)
 }catch(error){
   res.status(400).json({message: "you can't get all"})
 }
 
})

router.delete(`/:id`, async (req, res)=>{





  // await userModel.findByIdAndRemove(req.params.id, req.body);
  //     res.status(200).json({
  //       message: "You deleted the user successfully",
  //     });


  try{


     await userModel.deleteOne({ username: req.params.id},req.body)
     res.status(200).json({message:"You deleted the user successfully",})
   
    
   }catch(error){
     res.status(400).json({message: error.message})
   }
})


module.exports = router

