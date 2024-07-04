const express = require("express");
const app = express();
require("dotenv").config(); // Correctly invoking dotenv

const dbConfig = require("./config/db_config");
const portfolioRoute=require("./routes/portfolioRoute");

app.use(express.json());
app.get("/health",async(req,res)=>{
    res.send({
        message:"Health Ok"
    })
})

app.use("/api/portfolio",portfolioRoute);


const port = process.env.PORT || 5000; // Ensure the environment variable is in uppercase
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
  