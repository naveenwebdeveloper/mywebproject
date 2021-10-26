const jwt = require('jsonwebtoken');
const user = require('../schmod');


const auth = async (req,res,next) => {
    try{
        const token = req.cookies.jwtToken;
        const verifyToken =jwt.verify(token, process.env.SECRET_KEY);

        
        const rootUser = await user.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser){
            throw new Error('user Not fonund');  
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    }catch(err){
        res.status(400).send('Unotherised : token not valid');
        console.log(err)
    }
}

module.exports = auth;