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

   // console.log(videos);

    const selectedVideo = videos.find(
        (videolist) => videolist.id === videosId
    );
    res.status(201).send(selectedVideo);
});




// router.post("/",(req,res) =>{
//    console.log(req.body);
//     res.send("vidoes submitted");
// })


router.post("/",(req,res) =>{
    console.log(req.body);

    const videosJSON = fs.readFileSync("./data/video-details.json");
    const videos = JSON.parse(videosJSON);

    const newVideoDetail = {
        id : uuid(),
        title: req.body.title,
        channel:req.body.channel,
    };

    videos.push(newVideoDetail);

    const videosSTRINGIFIED = JSON.stringify(videos);
    fs.writeFileSync("./data/video-details.json",videosSTRINGIFIED);

    res.status(201).send("videos submitted successfully")
});









module.exports = router;