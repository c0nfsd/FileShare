require("dotenv").config()
import express from "express"
import multer from "multer"
import mongoose from "mongoose"

const app = express()
const upload = multer({dest: "uploads" })
mongoose.connect(process.env.DATABASE_URL)

app.set("view engine", "ejs")

app.get("/",(req, res) =>{
    res.render("index")
})

app.post("/upload", upload.single("file"), (req, res) =>{
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname
    }
})

app.listen(process.env.PORT)