import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res , next) => {
    if (!req.auth.userId) {
      return res.status(401).json({
            success: false,
            message: "Unauthorized",
        })
    }
    next();
}

export const requireAdmin = async (req, res, next) => {
  try {

    const currentUser = await clerkClient.users.getUser(req.auth.userId)
    const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress;

    if(!isAdmin){
      return  res.status(403).json({message: "unauthorized - you must be an admin"}) 
    }

    next();

  } catch(error){
  next(error);
  }
}