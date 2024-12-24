const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors");

const connection = require("./Config/db")
const userRourtes = require("./Routes/user.routes")
const notesRouter = require("./Routes/notes.routes")
const cookieParser = require("cookie-parser")



const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:3000"],
    credentials: true,
}))
app.use("/user",userRourtes)
app.use("/notes",notesRouter)

app.get("/",(req,res)=>{
    res.send("Hellow")
})

app.listen(process.env.PORT || 3000 ,async()=>{
    try {
        await connection
        console.log("server is running")
        
    } catch (error) {
        console.log(error)
    }
})