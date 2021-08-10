const express=require("express");
require("./db/conn");
const Student=require("./models/student");
const myRouter=require("./routers/student");
const app =express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello Smarty!!");
})

app.use(express.json());
app.use(myRouter);

app.listen(port,()=>{
    console.log(`Listening to ${port}`);
})