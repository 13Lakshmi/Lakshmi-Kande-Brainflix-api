const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");



router.get("/",(req,res) => {
    const videosBuffer = fs.readFileSync("./data/video-details.json")
    const videos = JSON.parse(videosBuffer);
    res.status(201).send(videos);
})


router.get("/:videosId",(req,res) =>{
    const { videosId } = req.params;
    
    const videosBuffer = fs.readFileSync("./data/video-details.json");
    const videos = JSON.parse(videosBuffer);

    const selectedVideo = videos.find( (videolist) =>{
    return videolist.id === videosId;
    });   
    if(selectedVideo){
        res.send(selectedVideo);
    }else{
    res.status(201).send("selectedVideo not found");
    }
});



router.post("/",(req,res) =>{
    console.log(req.body);

    const newVideoDetail = {
        id : uuid(),
        title: req.body.title,
        channel:req.body.channel,
        views: "0",
        likes: "0",
        duration: "4:01",
        timestamp:Date.now(),
        Comments:[],
        image:"image9.jpg"
    };
    const videosJSON = fs.readFileSync("./data/video-details.json");
    const videos = JSON.parse(videosJSON);

    videos.push(newVideoDetail);

    const videosSTRINGIFIED = JSON.stringify(videos);
    fs.writeFileSync("./data/video-details.json",videosSTRINGIFIED);

    res.status(201).send("videos submitted successfully")
});



module.exports = router;