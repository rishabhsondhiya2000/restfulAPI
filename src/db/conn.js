const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_db",{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection is established")
}).catch((err)=>{
    console.log("No connection");
});