const { Schema, models, model } = require("mongoose");

const UserSchema=new Schema({
    email:{
        type:String,
        require:true,
    
    },
    password:{
        type:String,
        require:true,
    
    },
    userType:{
        type:String,
        default:"user"
    }
})
const User = models.User || model("User",UserSchema);
export default User