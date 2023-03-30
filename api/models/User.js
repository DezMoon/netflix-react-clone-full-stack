const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{type:String, requested:true, unique:true},
    email:{type:String, requested:true, unique:true},
    password:{type:String, requested:true},
    profilePic:{type:String, default:""},
    isAdmin:{type:Boolean, default:false},
    },
    {timestamps:true}
);

module.exports=mongoose.model("User", UserSchema);