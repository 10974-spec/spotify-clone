import { User } from "../models/user.model.js";

export const authCallback = async (req,res, next) => {
  try {
    const {id , firstName, lastName, imageUrl } = req.body;

    // check if user already exists 
    const user = await User.findOne({clerkId: id});

    if(!user){
     //signup
     await User.create({
      fullName: `${firstName} ${lastName}`,
      imageUrl,
      clerkId: id,
     })
    } 
    

    res.status(200).json({
      success: true,
      message: "Success",
    })

  } catch (error) {
    console.log("Error ins auth callback",error)
    next(error)
  }
}


