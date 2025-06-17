import cloudinary from "../lib/cloudinary.js";
import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";


// ===HELPER FUNCTION FOR CLOUDINARY UPLOADS===//
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
     resource_type:"auto",
    })
    return result.secure_url
  } catch (error) {
    console.log("Error in uploadToCloudinary",error)
    throw new Error("Error uploading to cloudinary");
  }
}

export const createSong = async (req,res,next) => {
try {

  if(!req.files || !req.files.audioFile || !req.files.imageFile){
    return res.status(400).json({message: "Please Upload All files"})
  }

  const {title, artist, duration, albumId } = req.body;
  const audioFile = req.files.audioFile;
  const imageFile = req.files.imageFile;


  const audioUrl = await uploadToCloudinary(audioFile);
  const imageUrl = await uploadToCloudinary(imageFile);


  const song = new Song({
    title,
    artist,
    audioUrl,
    imageUrl,
    duration,
    albumId: albumId || null
  })

  await song.save();

  if(albumId){
    await Album.findByIdAndUpdate(albumId, {
      $push: { songs: song._id},
    })
  }
   res.status(201).json(song)
}catch (error){
  console.log("Error In creating song",error);
  next(error)
}
}