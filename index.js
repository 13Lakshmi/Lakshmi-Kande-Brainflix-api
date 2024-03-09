const express = require("express");
const app = express();
const cors = require("cors");
const videosRoutes = require("./routes/videosRoutes");

const PORT = 8080;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/videos",videosRoutes);




app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
});