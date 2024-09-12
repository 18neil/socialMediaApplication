import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async(req, res) => {
    

    const salt = await bcrypt.genSalt(10);
    const hasPass= await bcrypt.hash(req.body.password,salt)
    req.body.password = hasPass;
    const newUser = new UserModel(req.body)
    const {username} = req.body;
    try{
        const oldUser = await UserModel.findOne({username})
        if(oldUser){
            return res.status(400).json({msg:"username is already registered!"})
        }
        const user = await newUser.save()
        const token = jwt.sign({
            user
        }, process.env.JWT_KEY, {expiresIn:'2h'})

        res.status(200).json(token)
    }catch(error){
    res.status(500).json({msg:error.message})

    }
}

export const loginUser = async(req, res) => {
    const {username, password}= req.body
    try {
        const user = await UserModel.findOne({username:username})
        if(user){
            const valid = await bcrypt.compare(password, user.password)
            
           if(!valid){
            res.status(400).json("wrong password")
           }else{
            const token = jwt.sign({
                username : user.username, 
                id : user._id, 
                firstname:user.firstname,
                lastname: user.lastname,
                isAdmin: user.isAdmin,
                followers: user.followers,
                following: user.following,

            }, process.env.JWT_KEY, {expiresIn:'1h'})
            res.status(200).json(token)
           }
        }else{
            res.status(404).json({msg:"unable to find user"})
        }
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}