const express = require("express");
const app = express();
const fs = require("fs");


const videosRoutes = require("./routes/videosRoutes");

const PORT = 8080;

app.use(express.json());


app.use("/videos",videosRoutes);

// app.get("/",(req,res)=>{
//     res.send("Welcome");
// });


app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
});