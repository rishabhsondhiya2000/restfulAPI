const mongoose=require("mongoose");
const validator=require("validator");

const stdSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email ID is already registered"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("This Email ID is inValid");
            }
        }
    },
    address:{
        type:String,
        required:true
    }
});

//we will create a new collection using this model
const Student=new mongoose.model("Student",stdSchema);

module.exports=Student;