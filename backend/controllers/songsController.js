var Chansons=require('../models/Database');
const asyncHandler=require("express-async-handler");


const createSongs = asyncHandler ( async (req,res)=>{
    const {artist,title}=req.body;
     const songExists = await Chansons.findOne({title});
     if (songExists){
         res.status(404);
         throw new Error("Song already exists");
     }
     const newSong= await Chansons.create({
         title,
         artist,
     });
     if (newSong){
         res.status(201).json({
             _id,
             title:newSong.title,
             artist:newSong.artist
         });
     }else{
         res.status(400);
         throw new Error("User not found")
     }
});

module.exports={createSongs}