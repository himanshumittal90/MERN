require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// require CORS to enable in Cross Domain
const cors = require("cors");
//DB connection 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected")
}

const server = express();
server.use(cors()); // to enable CORS in cross domain
server.use(express.json());
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use("*", (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
server.listen(process.env.PORT, () => {
    console.log("server started adsadsa")
});
