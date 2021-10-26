 const mongoose = require('mongoose');
 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcrypt');

 const userSchema =  new mongoose.Schema({
    Fname: String,
    Lname: String,
    UserName: String,
    Email: String,
    Pass:String,
    Cpassword:String,
    tokens:[
        {
            token:String
        }
    ]
});

userSchema.pre('save', async function (next){
    console.log('this is middelware in save data');
    if(this.isModified('Pass')){
        console.log("Password is hashed now ");
        this.Pass = await bcrypt.hash(this.Pass,10);
        this.Cpassword = await bcrypt.hash(this.Cpassword,10);
    }
    next();
} );

userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


const user =  mongoose.model('user', userSchema);

module.exports = user;