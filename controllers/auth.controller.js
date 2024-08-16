const User = require('../models/user.models');
const Todo = require('../models/todo.models');
const bcrypt = require('bcryptjs');
const sendMail = require('../utils/mail.utils');

module.exports.register = async(req,res,next) =>{
    const {email,password} = req.body;

    try {
        const userExists = await User.findOne({email:email});

        if(userExists){
            console.log('user exists');
            res.status(200).json({message:'user exists'});
        } else {
            const user = await User.create({email,password});
            // await sendMail(email);
            res.status(200).json({user,userId:user._id,token: await user.generateToken()});
        }
    } catch (err) {
        next(err);
    }
}

module.exports.login = async(req,res) =>{
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message:'user does not exists'});
        }

        const user = await userExist.comparePassword(password);

        if(user){
            const token = await userExist.generateToken();
            res.cookie('login_token',token,{httpOnly:true,maxAge:1000*1000*24});
            
            res.status(200).json({
                message:'Login successful',
                token: token,
            });
        } else {
            res.status(401).json({message:'invalid email or password'});
        }
    } catch (error) {
        res.status(500).json('internal server error');
    }   
}

module.exports.logout = async function(req,res){
    res.clearCookie('login_token');
    res.status(200).json({message:'logged out successfully'});
}

module.exports.profile = async function(req,res){
    const token = req.user;
    console.log(req);
    res.send(token);
}



