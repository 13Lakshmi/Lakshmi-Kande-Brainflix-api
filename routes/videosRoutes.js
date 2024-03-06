const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");



router.get("/",(req,res) => {
    const videosJSON = fs.readFileSync("./data/video-details.json")
    const videos = JSON.parse(videosJSON);
    console.log(videos);
    res.status(201).send(videos);
})


router.get("/:videosId",(req,res) =>{
    const { videosId } = req.params;
    const videosJSon = fs.readFileSync("./data/video-details.json");
    const videos = JSON.parse(videosJSon);

    const selectedVideos = videos.find(
        (videodetail) => videodetail.id === videosId
    );
    res.status(210).send(selectedVideos);
});

// router.post("/",(req,res) =>{
//    console.log(req.body);

//     res.send("vidoes submitted");
// })


// router.post("/",(req,res) =>{
//     console.log(req.body);


//     const videosJSON = fs.readFileSync("./data/video-details.json");
//     const videos = JSON.parse(videosJSON);

//     const newVideoDetail = {
//         id : uuid(),
//         title: req.body.title,
//         channel:req.body.channel,
//     };

//     videos.push(newVideoDetail);

//     const videosSTRINGIFIED = JSON.stringify(videos);
//     fs.writeFileSync("./data/video-details.json",videosSTRINGIFIED);

//     res.status(201).send("videos submitted successfully")
// });









module.exports = router;