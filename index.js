const express = require("express");
const app = express();
const cors = require("cors");
const videosRoutes = require("./routes/videosRoutes");
require("dotenv").config();


const { PORT, CLIENT_URL}  = process.env;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use(cors({
    origin: CLIENT_URL
}));

app.use("/videos",videosRoutes);




app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
});