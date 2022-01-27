const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(console.log('connected'))
    .catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images")
    },filename:(req,file,cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage:storage})
app.use('/api/upload', upload.single("file"),(req,res) => {
    res.status(201).json('file has been uploaded')
})

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen("3000", () => {
    console.log('running');
})